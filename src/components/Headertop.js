import React from 'react'
import './Headertop.css'
const Headertop = () => {
  return (
    <div className="headertop">
        <div className="lefttop">
        <i class="bi bi-envelope-fill"></i>
        <a href='mailto:clinic@gmail.com'>Clinic@gmail.com</a>
        </div>
        <div className="righttop">
        <i class="bi bi-telephone-fill"></i>
        <span>7887898768</span>
        </div>
    </div>
  )
}

export default Headertop