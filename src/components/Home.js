import React from 'react'
import './Home.css'
import Service from './Service'
import Contact from './Contact'
import Teamlist from './Teamlist'
import Testimonial from './Testimonial'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <section className='homecontent'id='home'>
      <div className="container">
        <div className="row homeouter">
          <div className="col-md-6">
          <div className="homeleft">
          <h3>NURSING SERVICE AT <span>HOME</span></h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At minus, praesentium illo unde quasi quidem exercitationem repellat quae nemo debi</p>
          <Link path to ='./contact'><button>Book now</button></Link>
          </div>
          </div>
          <div className="col-md-6">
          <div className="homeright">
            <img src={require('./assets/homeimg.png')} alt='homeimage'/>
          </div>
          </div>
        </div>
        </div>
    </section>
    <Service />
    <Teamlist />
    <Contact />
    <Testimonial />
    </>
  )
}

export default Home