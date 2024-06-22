import React from 'react'
import "./Navbar.css"

const Navbar = (props) => {
  
  return (
    <>
      <div className="container">
        <div className="logo">logo</div>
        <ul>
            <li>{props.logo}</li>
            <li>{props.about}</li>
            <li>Profile</li>
            <li>More</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
