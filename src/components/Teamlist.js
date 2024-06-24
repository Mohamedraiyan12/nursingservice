import React from 'react'
import './Teamlist.css'
import { listdata} from './Teamlistdata';

const Teamlist = () => {
  return (
    <section className='teamcontent'>
      <div className="container">
        <div className="teamheading">
          <h5>Our Team</h5>
          <h2>Our Expert Teams</h2>
        </div>
        <div className="teambox">
        {listdata.map((datas) => (
        <div className="teamcard">
          <img src={datas.image} width={300} height={300} alt='memberimages'/>
          <div className="cardcontent">
            <h3>{datas.name}</h3>
            <p>vbvyubuhbuhuhuu</p>
          </div>
        </div>
        ))}
        </div>
        {/* <div className="teambox">
          <div className="teamcard">
            <img src={require('./assets/team1.jpg')} width={300} height={300}/>
            <div className="cardcontent">
              <h3>Doctor Name</h3>
              <p>46876547876543</p>
            </div>
          </div>
          <div className="teamcard">
            <img src={require('./assets/team2.jpg')} width={300} height={300}/>
            <div className="cardcontent">
              <h3>Doctor Name</h3>
              <p>46876547876543</p>
            </div>
          </div>
          <div className="teamcard">
            <img src={require('./assets/team3.jpg')} width={300} height={300}/>
            <div className="cardcontent">
              <h3>Doctor Name</h3>
              <p>46876547876543</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Teamlist