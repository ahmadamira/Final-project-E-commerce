import React, { useEffect, useState } from 'react';
import { Carttotalcontext } from '../Context/Carttotalcontext';
import { UserAuth } from '../Context/Authcontext';

const Carttotalprovider = ({ children }) => {
    const { user } = UserAuth(); // Access the user object from the UserAuth context
    const [cartTotal, setCartTotal] = useState([]);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        // Store the cart total in the session storage whenever it changes
        if (cartTotal.length !== 0 || flag) {
            sessionStorage.setItem('cartTotal', JSON.stringify(cartTotal));
            setFlag(false)
            // Store the cart total in the database
        }



    }, [cartTotal]);

    useEffect(() => {
        const storedCartTotal = sessionStorage.getItem('cartTotal');
        if (storedCartTotal) {

            setCartTotal(JSON.parse(storedCartTotal));
        }
    }, []);



    const addItem = (item) => {
        const itemExists = cartTotal.find((cartItem) => cartItem.title === item.title);

        if (itemExists) {
            setCartTotal((prevCart) =>
                prevCart.map((cartItem) =>
                    cartItem.title === item.title
                        ? {
                            ...cartItem,
                            quantity: +cartItem.quantity + 1,
                        }
                        : cartItem
                )
            );
        } else {
            setCartTotal((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
        }
    };

    const removeItem = (item) => {
        const itemExists = cartTotal.find((cartItem) => cartItem.title === item.title);

        if (itemExists.quantity === 1) {
            setCartTotal((prevCart) => prevCart.filter((cartItem) => cartItem.title !== item.title));
        } else {
            setCartTotal((prevCart) =>
                prevCart.map((cartItem) =>
                    cartItem.title === item.title
                        ? {
                            ...cartItem,
                            quantity: +cartItem.quantity - 1,
                        }
                        : cartItem
                )
            );
        }
    };

    const deleteItem = (item) => {
        setCartTotal((prevCart) => prevCart.filter((cartItem) => cartItem.title !== item.title));

        setFlag(true)

    };

    return (
        <Carttotalcontext.Provider value={{ cartTotal, addItem, removeItem, deleteItem }}>
            {children}
        </Carttotalcontext.Provider>
    );
};

export default Carttotalprovider;
