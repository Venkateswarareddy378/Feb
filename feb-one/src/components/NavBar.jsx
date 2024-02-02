import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
   <div className="navSection">
    <ul>
        <Link to='/Home'>  <li>Home </li>   </Link>
        <Link to='/About'>  <li>About </li>  </Link>      
        <li>Contact </li>  
        <li>Login/Register</li>
    </ul>
   </div>
  )
}

export default NavBar