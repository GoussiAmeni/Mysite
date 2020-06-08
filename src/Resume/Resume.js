import React from 'react'
import './Resume.modules.css'
import C from '../Images/c.png'
import htmlcss from '../Images/htmlcss.png'
import java from '../Images/java.png'
import js from '../Images/js.png'
import linux from '../Images/linux.jpg'
import mysql from '../Images/mysql.png'
import php from '../Images/php.png'
import py from '../Images/py.png'
import react from '../Images/react.png'
import uml from '../Images/uml.png'

const resume = (props) => {
  return (
    <div>
      <h1 className="resume">{props.Skills}</h1>
      <div className="content">
        <img className="icon" src={C} />
        <img className="icon" src={htmlcss} />
        <img className="icon" src={java} />
        <img className="icon" src={js} />
      </div>
      <div className="content">
        <img className="icon" src={mysql} />
        <img className="icon" src={php} />
        <img className="icon" src={react} />
        <img className="icon" src={uml} />
      </div>
      <div className="content">
        <img className="icon" src={linux} />
        <img className="icon" src={py} />
      </div>

      <div className="contentbutton">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <form action="https://drive.google.com/file/d/1pMFkYU-RXwcbnNNMAIyJPbLKbGjbaLlr/view?usp=sharing">
          <button className="button">
            CV version française <i class="fa fa-download"></i>{' '}
          </button>
        </form>
        <form action="https://drive.google.com/file/d/1pMFkYU-RXwcbnNNMAIyJPbLKbGjbaLlr/view?usp=sharing">
          <button className="button">
            Resume english version <i class="fa fa-download"></i>{' '}
          </button>
        </form>
      </div>
    </div>
  )
}

export default resume
