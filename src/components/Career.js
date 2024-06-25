import React from 'react'
import './Career.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Career = () => {
  const notify = () => toast("sucessfully sent your request for an appoinment!")
  return (
    <section class="joinuscontent" id='Joinus'>
        <div class="container">
          <div className="joinus-title">
            <h5>Career</h5>
            <h2>join our career opportunities</h2>
          </div>
          <div class="row">
            <div class="col-md-6 mb-4">
                <div className='careerleft'>
                  <img src={(require('./assets/carreerpage.jpg'))}alt="contactimages"  width={500} height={500}/>
                  <div className="outercontent">
                  </div> 
                </div>
              </div>
            <div class="col-md-6">
              <div class="headingcareer">
                <h3>Join our home care team</h3>
              </div>
              <div class="careerforms">
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
                   <div className="resume">
                   <input type="file" id="myFile" name="filename"  placeholder='uploa resume'/>
                   </div>
                      <div className="messages">
                        <textarea class="msg" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    </div>
                    <button type="submit"  id="btn" class="btn btn-primary" onClick={notify}>Apply Now</button>
                    <ToastContainer />
                  </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
export default Career;
