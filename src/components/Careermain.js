import React from 'react'
import './Careermain.css'
import { Link } from 'react-router-dom'
const Careermain = () => {
  return (
    <section className = 'career'>
        <div className = "container">
            <div className="careerpage">
             <img src={require('./assets/team1.jpg')} alt='images'/>
            <div className="careerinsidecontent">
                <h2>JOIN OUR CAREER OPPORTUNITIES</h2>
                <Link to ='/career'><button className='applybtn'>APPLY NOW</button></Link>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Careermain