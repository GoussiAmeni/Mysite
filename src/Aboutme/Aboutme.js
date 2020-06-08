import React from 'react'
import './Aboutme.modules.css'
import icon2 from '../Images/icon2.png'
import icon3 from '../Images/icon3.png'

const aboutme = (props) => {
  return (
    <div>
      <h2>{props.about}</h2>
      <p>{props.aproposdemoi}</p>
      <a className="activity"> {props.activity} </a>

      <div className="row">
        <div className="column">
          <img src={icon2} />
        </div>
        <div className="column">
          <img src={icon3} />
        </div>
      </div>

      <div className="row">
        <div className="column">
          <p className="title">CONCEPTION</p>
          <p className="description">{props.conceptiondesc}</p>
        </div>
        <div className="column">
          <p className="title">{props.development}</p>
          <p className="description">{props.developmentdesc}</p>
        </div>
      </div>
    </div>
  )
}

export default aboutme
