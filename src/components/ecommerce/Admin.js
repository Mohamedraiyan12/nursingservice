import React from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'
import { useState } from 'react'
const Admin = () => {
    const [details, setdetails] = useState({});
     function handlechange (e) {
      e.preventDefault()
        const names = e.target.name;
        const value = e.target.password;
        setdetails( (prev) => {
            return  {...prev, [names]:value}})
      }
       function submit(e){
        e.preventDefault()
        console.log(details)
      }
   return (
     <div className="container admin">
      <div className="wrapper">
        <form onSubmit={submit}>
          <div className="row adminrow">
          <i className="bi bi-person-fill"></i>
            <input type= 'email'
             name='email'
             placeholder="Email or Phone" 
             onChange={handlechange}
             required />
          </div>
          <div className="row adminrow">
          <i className="bi bi-lock-fill"></i>
            <input type="password" onChange={handlechange} name= 'password' placeholder="Password" required />
          </div>
          <div className="pass"><Link to = '/'>Forgot password?</Link></div>
          <div className="row button">
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">Not a member? <Link to = '/path'>Signup now</Link></div>
        </form>
      </div>
    </div>
  )
}

export default Admin