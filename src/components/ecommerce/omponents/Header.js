// import Search from "./Search";
// import Wholesale from './Wholesale'
import { useNavigate } from 'react-router-dom';
export default function Header() {
    const MyComponent = () => {
        const navigate = useNavigate();
      
        const redirectToAnotherComponent = () => {
          navigate('/path-to-another-component');
        };
      
        // Rest of your component logic...
      }
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
                     <button className='btn' onClick={redirectToAnotherComponent}>Wholesale</button>
                     <button className='btn'>Retail </button>
                     <i class="bi bi-bag-plus "></i>
                     <span class="ml-1" id="cart_count">2</span>
                     </div>
                    </div>
                </div>
                </div>
        </section>
    //   <nav class="navbar row">
    //       <div class="col-12 col-md-3">
    //         <div class="navbar-brand">
    //           <img src={require('../images/logo.png')} width="150px"/>
    //         </div>
    //       </div>
    //       <div class="col-12 col-md-6 mt-2 mt-md-0">
    //         <div class="input-group">
    //           <input
    //             type="text"
    //             id="search_field"
    //             class="form-control"
    //             placeholder="Enter Product Name ..."
    //           />
    //           <div class="input-group-append">
    //             <button id="search_btn" class="btn">
    //               <i class= "bi bi-search" aria-hidden="true"></i>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    
    //       <div class="col-12 col-md-3 mt-4 mt-md-0 text-center">
    //         <span id="cart" class="ml-3">Cart</span>
    //         <span class="ml-1" id="cart_count">2</span>
    //       </div>
    //     </nav>
    
    )
}
