import React from 'react'
import './Service.css'
const Service = () => {
  return (
    <section className='servicecontent' id='service'>
      <div className="container">
        <div className="serviceheading">
          <h5>Our Service</h5>
          <h2>Nursing service offered at home</h2>
        </div>
        <div className="servicebox">
          <div className="card">
          <div className="image">
          <img src={require('./assets/diabetes.png')} width={90} height={80}/>
          </div>
          <h5>Lab Test</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut voluptatum accusantium perfere</p>
          <button>book now</button>
          </div>
          <div className="card">
          <div className="image">
          <img src={require('./assets/eldercare.png')} width={90} height={80}/>
          </div>
          <h5>Elder Care</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut voluptatum accusantium perfere</p>
          <button>booknow</button>
          </div>
          <div className="card">
          <div className="image">
          <img src={require('./assets/counselling.png')} width={90} height={80}/>
          </div>
          <h5>Counselling</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut voluptatum accusantium perfere</p>
          <button>booknow</button>
          </div>
          <div className="card">
          <div className="image">
          <img src={require('./assets/physiothraphy.png')} width={90} height={80}/>
          </div>
          <h5>Physiotheraphy</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut voluptatum accusantium perfere</p>
          <button>booknow</button>
          </div>
          <div className="card">
          <div className="image">
          <img src={require('./assets/diabetes.png')} width={90} height={80}/>
          </div>
          <h5>Diabetes care</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut voluptatum accusantium perfere</p>
          <button>booknow</button>
          </div>
          <div className="card">
          <div className="image">
          <img src={require('./assets/nursing.png')} width={90} height={80}/>
          </div>
          <h5>Nursing</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut voluptatum accusantium perfere</p>
          <button>booknow</button>
          </div>
        </div>
        </div>
    </section>
  )
}
export default Service;