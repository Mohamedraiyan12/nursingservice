import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    <section className='footer'>
    <div className="container">
        <div className="footercontent">
            <div className="left1">
            <h3><span>OUR</span> ADDRESS</h3>
             <img src={require('./assets/logo.png')} width="60px" height="60px"/>
             <div class="iconscontent">
                <p><i class="bi bi-envelope-fill"></i>  Construction@examples.com</p>
                <p><i class="bi bi-phone-fill"></i> +124 421 454 6623</p>
                <p><i class="bi bi-geo-alt-fill"></i> 1798 Pretty View Lane, California</p>
              </div>
            </div>
            <div className="left4">
            <h3><span>OPENING</span> HOURS</h3>
            <ul>
              <li>Monday</li>
              <li>7:00 am - 7:00pm</li>
            </ul>
            <ul>
              <li>Tuesday</li>
              <li>7:00 am - 7:00pm</li>
            </ul>
            <ul>
              <li>wednesday</li>
              <li>7:00 am - 7:00pm</li>
            </ul>
            <ul>
              <li>Friday</li>
              <li>7:00 am - 7:00pm</li>
            </ul>
            <ul>
              <li>Saturday</li>
              <li><span>CLOSED</span></li>
            </ul>
            <ul>
              <li>Sunday</li>
              <li><span>CLOSED</span></li>
            </ul>
            </div>
            <div className="left2">
              <div className="left2heading">
              <h3><span>OUR</span> SOCIAL</h3>
              </div>
              <div className="socialmedia">
              <a href=''><i class="bi bi-whatsapp"></i></a>
              <a href=''><i class="bi bi-linkedin"></i></a>
              <a href=''><i class="bi bi-twitter-x"></i></a>
              <a href=''><i class="bi bi-facebook"></i></a>
              </div>
            </div>
        </div>
    </div>
    <div class="container">
      <div class="line">
      </div>
      <div class="copyright">
        <p>© All rights reserved. Template designed by <span>Bootstrapious.</span></p>
      </div>
    </div>
</section>
  )
}
export default Footer;

