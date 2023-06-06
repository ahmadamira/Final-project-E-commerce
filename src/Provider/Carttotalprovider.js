import React, { useEffect, useState } from "react";
import { Carttotalcontext } from "../Context/Carttotalcontext";

const Carttotalprovider = ({ children }) => {
  const [cartTotal, setCartTotal] = useState([]);

  const addItem = (item) => {
    const itemExists = cartTotal.find(
      (cartItem) => cartItem.totalInfo.title === item.totalInfo.title
    );

    if (itemExists) {
      setCartTotal((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.totalInfo.title === item.totalInfo.title
            ? {
                ...cartItem,
                totalInfo: {
                  ...cartItem.totalInfo,
                  quantity: +cartItem.totalInfo.quantity + 1,
                },
              }
            : cartItem
        )
      );
    } else {
      setCartTotal((prevCart) => [
        ...prevCart,
        { ...item, totalInfo: { ...item.totalInfo, quantity: 1 } },
      ]);
    }
    console.log(
      "🚀 ~ file: Carttotalprovider.js ~ line 100 ~ addItem ~ cartTotal",
      cartTotal
    );
  };

  const removeItem = (item) => {
    const itemExists = cartTotal.find(
      (cartItem) => cartItem.totalInfo.title === item.totalInfo.title
    );

    if (itemExists.totalInfo.quantity === 1) {
      setCartTotal((prevCart) =>
        prevCart.filter(
          (cartItem) => cartItem.totalInfo.title !== item.totalInfo.title
        )
      );
    } else {
      setCartTotal((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.totalInfo.title === item.totalInfo.title
            ? {
                ...cartItem,
                totalInfo: {
                  ...cartItem.totalInfo,
                  quantity: +cartItem.totalInfo.quantity - 1,
                },
              }
            : cartItem
        )
      );
    }
  };
  const deleteItem = (item) => {
    setCartTotal((prevCart) =>
      prevCart.filter(
        (cartItem) => cartItem.totalInfo.title !== item.totalInfo.title
      )
    );
    console.log(
      "🚀 ~ file: Carttotalprovider.js ~ line 100 ~ addItem ~ cartTotal",
      cartTotal
    );
  };

  return (
    <Carttotalcontext.Provider
      value={{ cartTotal, addItem, removeItem, deleteItem }}
    >
      {children}
    </Carttotalcontext.Provider>
  );
};

export default Carttotalprovider;
