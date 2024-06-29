
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <section className="header">
            <div className="container">
                <div className=" row allheader">
                    <div className="col-md-2">
                    <div className="leftheader">
                    <img src={require('../images/e-logo.png')} alt='images' width={40} height={40}/>
                    </div>
                    </div>
                    <div className="col-md-6">
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
                    </div>
                    <div className="col-md-4">
                     <div className="rightheader">
                     <Link to ='/wholesale'><button className ='btn' >Wholesale</button></Link>
                     <Link to ='/retail'><button className ='btn' >Retail</button></Link>
                     <i class="bi bi-bag-plus "></i>
                     <span class="ml-1" id="cart_count">2</span>
                     </div>
                    </div>
                </div>
                </div>
        </section>
    )
}
