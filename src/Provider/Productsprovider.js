import React, { useEffect, useState } from 'react';
import Productscontext from "../Context/Productscontext";

const Productsprovider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                console.log(data); // Access the response data here

                setProducts(data.products); // Set the products state with the response data
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
