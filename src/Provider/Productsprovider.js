import React, { useEffect, useState } from 'react';
import Productscontext from "../Context/Productscontext";
const Productsprovider = ({ children }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.log('Error fetching products:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Productscontext.Provider value={{ products }}>
            {children}
        </Productscontext.Provider>
    );
};

export default Productsprovider;
