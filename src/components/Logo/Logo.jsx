import React from 'react'
import logo from "../../img/logo.png"
import "./Logo.css"

const Logo = () => {
  return (
    <div className="logo_contenedor">
        <img src={logo} className="logo" alt="logo to-do" />
        <h1 className='title'>TO-DO APP</h1>
      </div>
  )
}

export default Logo;