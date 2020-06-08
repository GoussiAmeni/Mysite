import React from 'react'
import './Contact.modules.css'

const contact = (props) => {
  return (
    <div className="contact">
      <div className="row">
        <div className="column">
          <i>{props.contact}</i>
        </div>
        <div className="column">
          <i>{props.Coordonnées}</i>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div class="container">
            <form>
              <label>{props.FirstName}</label>
              <input className="text" />

              <label>{props.LastName}</label>
              <input className="text" />

              <label for="subject">{props.Subject}</label>
              <textarea className="text"></textarea>

              <label for="message">{props.Message}</label>
              <textarea className="message"></textarea>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
        <div className="column">
          <h4 className="espace"> Goussi Ameni </h4>
          <h4> Bizerte Tunis 7000 </h4>
          <h4>(+216) 54928638 </h4>
        </div>
      </div>
    </div>
  )
}

export default contact
