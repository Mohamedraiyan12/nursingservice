import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Wholesalehome from '../pages/Wholesalehome'
const Wholesale = () => {
  const [cart, setcart ]  = useState([])
  return (
    <>
    <Header />
    <div>
      <Wholesalehome  cart ={cart} setcart ={setcart} />
    </div>
    <Footer />
    </>
  )
}

export default Wholesale