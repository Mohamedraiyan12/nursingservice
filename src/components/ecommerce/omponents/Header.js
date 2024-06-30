import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <section className="header">
            <div className="container-fluid">
                <div className=" allheader">
                    <div className="leftheader">
                    <img src={require('../images/e-logo.png')} alt='images' width={40} height={40}/>
                    </div>
                    <div className="centerheader">
                    <input
                    type="text"
                     placeholder="Enter Product Name ..." />
                    <div className="icons">
                    <button id="search_btn" class="btn">
                    <i class= "bi bi-search" aria-hidden="true"></i>
                    </button>
                    </div>
                    </div>
                     <div className="rightheader">
                     <Link to ='/wholesale'><button className ='wholesalebtn' >Wholesale</button></Link>
                     <Link to ='/retail'><button className ='retailbtn' >Retail</button></Link>
                     <Link to ='/cart'><i class="bi bi-bag-plus "></i><span class="ml-1" id="cart_count">0</span></Link>
                     </div>
                </div>
                </div>
        </section>
    )
}
