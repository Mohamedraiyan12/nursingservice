
import {Fragment } from 'react'
import { retaildata } from '../Retaildata';
import { useState } from 'react';
// import Productcard from '../omponents/Productcard'
// import { useSearchParams } from 'react-router-dom';
export function Wholesalehome() {
    const [products] = useState(retaildata);
    return <Fragment>
        <h1 id="products_heading"> Retail  <span>Products</span></h1>
        <section id="products" className="container mt-5 my-5">
        <div className="row">
        {products.map((product) => (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3 retailcard ">
        <div className="card p-3 rounded">
        <img
                 className="card-img-top mx-auto"
                 src={product.images}
                 alt='images' width={200}/>
         <div className="card-body d-flex flex-column">
              <h5 className="card-title">{product.Productname}</h5>
              <p className="card-text">{product.productprice}</p>
               <a href="/" id="add_btn" >Add to card</a>
               </div>
         </div>
         </div>
        ))}
        </div>
        </section>
    </Fragment>
}
export default Wholesalehome;