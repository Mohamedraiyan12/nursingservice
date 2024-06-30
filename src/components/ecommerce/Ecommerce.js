import React from 'react'
import Home from '../ecommerce/pages/Home'
import Header from './omponents/Header'
import Footer from './omponents/Footer'
import './Ecommerce.css'
import { useState } from 'react'
const Ecommerce = () => {
  const [cart, setcart] = useState([])
  return (
    <div>
      <Header />
       <Home  cart ={cart} setcart={setcart}/>
      <Footer />
    </div>
  )
}
export default Ecommerce