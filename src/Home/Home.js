import React from 'react'
import logo from '../Images/ameni.jpg'
import './Home.modules.css'

const home = (props) => {
  return (
    <div className="background">
      <img className="myphoto" src={logo} />
      <h1>{props.description}</h1>
    </div>
  )
}

export default home
