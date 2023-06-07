
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
const Routers = () => {
    return (

        <Routes>
            <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
            <Route path='/about' element={<ProtectedRoute><Aboutpage /></ProtectedRoute>}></Route >
            <Route path='/Contactus' element={<ProtectedRoute><ContactForm /></ProtectedRoute>}></Route>
            <Route path='/product/:id' element={<ProtectedRoute><Productpage /></ProtectedRoute>}></Route>
            <Route path='/total' element={<ProtectedRoute><Totalpage /></ProtectedRoute>}></Route>
            <Route path='/checkout' element={<ProtectedRoute><Checkoutpage /></ProtectedRoute>}></Route>
            <Route path='/login' element={<Loginpage />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='/products' element={<ProtectedRoute><Productspage /></ProtectedRoute>}></Route>

        </Routes >

    )
}

export default Routers
