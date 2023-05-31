import React, { useEffect, useState } from 'react';
import { Carttotalcontext } from '../Context/Carttotalcontext';

const Carttotalprovider = ({ children }) => {
    const [cartTotal, setCartTotal] = useState([]);

    const addItem = (item) => {
        setCartTotal((prevCart) => [...prevCart, item]);

    };

    const removeItem = (itemId) => {
        setCartTotal((prevCart) => prevCart.filter((item) => item.totalInfo.title === itemId));
    };

    return (
        <Carttotalcontext.Provider value={{ cartTotal, addItem, removeItem }}>
            {children}
        </Carttotalcontext.Provider>
    );
};

export default Carttotalprovider;
