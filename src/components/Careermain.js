import React from 'react'
import './Careermain.css'
const Careermain = () => {
  return (
    <section className = 'career'>
        <div className = "container">
            <div className="careerpage">
             <img src={require('./assets/team1.jpg')} alt='images'/>
            <div className="careerinsidecontent">
                <h2>JOIN OUR CAREER OPPORTUNITIES</h2>
                <a href='/career'><button className='applybtn'>APPLY NOW</button></a>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Careermain