import React from 'react'
import './Contact.css'
import { contactimg } from './Contactimg';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const notify = () => toast("sucessfully sent your request for an appoinment!")
  return (
  <>
    <section class="contactcontent" id='contact'>
        <div class="container">
          <div className="contactheading">
            <h5>Contact us</h5>
            <h2>We are alyways ready to help you Book us</h2>
          </div>
          <div class="row">
            <div class="col-md-6 mb-4">
              {contactimg.map((images) =>(
                <div className='contactleft'>
                  <img src={images.image} alt="contactimages"  width={500} height={500}/>
                  <div className="outercontent">
                  </div> 
                </div>
              ))}
              </div>
            <div class="col-md-6">
              <div class="headingcontact">
                <h3>Book an Appoinment</h3>
              </div>
              <div class="contactforms">
                  <form>
                    <div className="username">
                      <input type="text" class="username" id="inputusername"  placeholder="Name" />
                    </div>
                    <div className="email">
                      <input type="email" class="email" id="exampleInputEmail1" placeholder="Email" />
                    </div>
                   <div className="number">
                   <input type="text" class="number" id="inputcontactnumber" placeholder="Phone number" />
                   </div>
                      <div className="messages">
                        <textarea class="msg" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    </div>
                    <button type="submit"  id="btn" class="btn"  onClick={notify}>SUBMIT NOW</button>
                    <ToastContainer />
                  </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  </>
  )
}
export default Contact;
