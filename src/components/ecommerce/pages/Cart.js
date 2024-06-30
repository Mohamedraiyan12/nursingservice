
import Header from '../omponents/Header'
import Footer from '../omponents/Footer' 
import './Cart.css'
// import { useState } from 'react'
const Cart = () => {
    // const [total, settotal] = useState(0)
    
  return (
    <>
    <Header />
    <h1 id="products_heading">your cart <span> items</span></h1>
    <div className="container cart-container">
        <div className="cartproduct">
            <img src={require('../images/products/4.jpg')} alt='images' width={100} height={100} />
        <div className="cartproductdetail">
            <h5>productname</h5>
            <p>$545</p>
        </div>
        </div>
        <div className="cartproduct">
            <img src={require('../images/products/4.jpg')} alt='images' width={100} height={100} />
        <div className="cartproductdetail">
            <h5>productname</h5>
            <p>$545</p>
        </div>
        </div>

        <div className="cartproduct">
            <img src={require('../images/products/4.jpg')} alt='images' width={100} height={100} />
        <div className="cartproductdetail">
            <h5>productname</h5>
            <p>$545</p>
        </div>
        </div>
        <div className="cartproduct">
            <img src={require('../images/products/4.jpg')} alt='images' width={100} height={100} />
        <div className="cartproductdetail">
            <h5>productname</h5>
            <p>$545</p>
        </div>
        </div>
    </div>
     <h1 id='products_heading'>total amount is <span>0</span></h1>
    <Footer />
    </>
  )
}

export default Cart