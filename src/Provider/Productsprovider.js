// Productsprovider.js
import React, { useEffect, useState } from 'react';
import Productscontext from "../Context/Productscontext";
import { Productsdata } from '../Components/Data/Data';

const Productsprovider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        const productsData = Object.values(Productsdata);
        setProducts(productsData);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Productscontext.Provider value={{ products }}>
            {children}
        </Productscontext.Provider>
    );
};

export default Productsprovider;
