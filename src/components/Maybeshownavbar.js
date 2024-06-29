import React from 'react'
import './Maybeshownavbar.css'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
const Maybeshownavbar = ({children}) => {
    const location  = useLocation();
    const [shownavbar, setshownavbar] = useState(false)
    useEffect(() =>{
        console.log('this is location:',location)
        if(location.pathname === '/ecommerce' || location.pathname === '/wholesale' || location.pathname === '/retail' )
            {
                setshownavbar(false)
            }
            else{
                setshownavbar(true)
            }
    },[location])
  return (
    <>
    {shownavbar && children}
    </>
  )
}

export default Maybeshownavbar