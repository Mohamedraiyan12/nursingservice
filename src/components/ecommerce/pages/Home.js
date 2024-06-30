import {Fragment } from 'react'
import { data } from '../Productsdata'
import { useState } from 'react';
import Productcard from '../omponents/Productcard'
// import { useSearchParams } from 'react-router-dom';
export function Home() {
    const [products] = useState(data);
    return <Fragment>
        <h1 id="products_heading">Latest <span>Products</span></h1>
        <section id="products" className="container mt-5 my-5">
        <div className="row">
        {products.map((product) => (
        <Productcard  key={product.key} product={product} />
        ))}
        </div>
        </section>
    </Fragment>
}
export default Home;