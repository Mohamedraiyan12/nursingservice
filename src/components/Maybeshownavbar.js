import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
const Maybeshownavbar = ({children}) => {
    const location  = useLocation();
    const [shownavbar, setshownavbar] = useState(false)
    useEffect(() =>{
        console.log('this is location:',location)
        if(location.pathname === '/ecommerce')
            {
                setshownavbar(false)
            }
            else{
                setshownavbar(true)
            }
    },[location])
  return (
    <p>{shownavbar && children}</p>
  )
}

export default Maybeshownavbar