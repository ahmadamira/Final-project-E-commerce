import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home-page/Home'
import Aboutpage from './Components/Aboutpage/Aboutpage'
import ContactForm from './Components/Contactuspage/Contactuspage'
import Productpage from './Components/Productpage/Productpage'
import Totalpage from './Components/Totalpage/Totalpage'
import Checkoutpage from './Components/Checkoutpage/Checkoutpage'
import Loginpage from './Components/Loginpage/Loginpage'
import SignUp from './Components/Signuppage/Signup'
import Productspage from './Components/Productspage/Productspage'
import ProtectedRoute from './Components/ProtectedRout/ProtectedRout'

import Notfound from "./Components/Notfound/Notfound";
import LoginProtectedrout from './Components/Protectlogin/LoginProtectedrout'

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/contactus" element={<ContactForm />} />
            <Route path="/product/:id" element={<ProtectedRoute><Productpage /></ProtectedRoute>} />
            <Route path="/total" element={<ProtectedRoute><Totalpage /></ProtectedRoute>} />
            <Route path="/checkout" element={<ProtectedRoute><Checkoutpage /></ProtectedRoute>} />
            <Route path="/login" element={<LoginProtectedrout><Loginpage /></LoginProtectedrout>} />
            <Route path="/signup" element={<LoginProtectedrout><SignUp /></LoginProtectedrout>} />
            <Route path="/products" element={<ProtectedRoute><Productspage /></ProtectedRoute>} />


            <Route path="*" element={<Notfound />} />
        </Routes>
    );
};

export default Routers;
