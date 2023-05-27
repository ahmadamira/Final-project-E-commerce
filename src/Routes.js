
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
const Routers = () => {
    return (

        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<Aboutpage />}></Route>
            <Route path='/Contactus' element={<ContactForm />}></Route>
            <Route path='/product' element={<Productpage />}></Route>
            <Route path='/total' element={<Totalpage />}></Route>
            <Route path='/checkout' element={<Checkoutpage />}></Route>
            <Route path='/login' element={<Loginpage />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='/products' element={<Productspage />}></Route>

        </Routes>

    )
}

export default Routers
