import {Fragment } from 'react'
import  { wholesaledata } from '../Wholesaledata'
import { useState } from 'react';
// import Productcard from '../omponents/Productcard'
// import { useSearchParams } from 'react-router-dom';
export function Wholesalehome({ product, cart, setcart}) {
    const [products] = useState(wholesaledata);

    const addcart = () => {
        setcart([...cart, product])
    };
    const removecart = () => {
        setcart((cart.filter((e) => e.id!== product.id)))
    };
    return <Fragment>
        <h1 id="products_heading"> Wholesale <span>Products</span></h1>
        <section id="products" className="container mt-5 my-5">
        <div className="row">
        {products.map((product) => (
        <div className="col-sm-6 col-md-6 col-lg-3 my-3">
        <div className="card p-3 rounded" key={product.id}>
        <img
                 className="card-img-top mx-auto"
                 src={product.images}
                 alt='images' width={200}/>
         <div className="card-body d-flex flex-column">
              <h5 className="card-title">{product.Productname}</h5>
              <p className="card-text">{product.productprice}</p>
              {cart.includes(product) ? <button id="add_btn" onClick={removecart} >Remove</button> : <button id="add_btn" onClick={addcart}>Add to cart</button>}
               </div>
         </div>
         </div>
        ))}
        </div>
        </section>
    </Fragment>
}
export default Wholesalehome;