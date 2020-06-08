import React, { Component } from 'react'
import './App.modules.css'
import Home from '../src/Home/Home'
import Aboutme from '../src/Aboutme/Aboutme'
import Resume from '../src/Resume/Resume'
import Contact from '../src/Contact/Contact'

class App extends Component {
  state = {
    page1: 'Home',
    page2: 'About',
    page3: 'Resume',
    page4: 'contact',
    homedescription:
      'Self-taught and disciplined, I am a young developer who wants to gain experience and work in a field that fascinates me',
    about: 'WHO AM I ?',
    aproposdemoi:
      'I m Ameni Goussi, I m 23 years old and currently I m a second year computer science engineer at INSAT .My speciality at INSAT is Network Engineer but in the same time I m very interested in the field of web development ',
    activity: 'MAIN ACTIVITIES',
    Skills: 'SKILLS',
    development: 'DEVELOPMENT',
    conceptiondesc:
      'Positioning, functionalities, strategy: design a site or redesign it as part of a complete overhaul',
    developmentdesc:
      'Create a new module, expand the perimeter of a site, provide new services to your customers',
    contact: 'Contact Me',
    Coordonnées: 'Contact information',
    FirstName: 'FirstName',
    LastName: 'LastName',
    Subject: 'Subject',
    Message: 'Message',
  }

  switchtofrensh = () => {
    this.setState({
      page1: 'Acceuil',
      page2: 'À propos',
      page3: 'CV',
      homedescription:
        'Autodidacte et discipliné, je suis une jeune développeuse qui souhaite gagner en expérience et travailler dans un domaine qui me passionne.  ',
      about: 'QUI SUIS-JE ?',
      Skills: 'Compétances',
      aproposdemoi:
        'Je suis Ameni Goussi, j ai 23 ans et actuellement je suis ingénieur informatique en deuxième année à l INSAT. Ma spécialité à l INSAT est Ingénieur Réseau mais en même temps je suis très intéressé par le domaine du développement web',
      activity: 'ACTIVITÉS PRINCIPALES',
      development: 'DÉVELOPPEMENT',
      conceptiondesc:
        'Positionnement, fonctionnalités, stratégie : concevoir un site ou le remodéliser dans le cadre d une refonte complète',
      developmentdesc:
        'Créer un nouveau module, élargir le périmètre d un site, fournir de nouveaux services à vos clients',
      contact: 'Contactez moi',
      Coordonnées: 'Coordonnées',
      FirstName: 'Prénom',
      LastName: 'Nom de famille',
      Subject: 'Sujet',
      Message: 'Message',
    })
  }

  switchtoenglish = () => {
    this.setState({
      page1: 'Home',
      page2: 'About',
      page3: 'Resume',
      homedescription:
        'Self-taught and disciplined, I am a young developer who wants to gain experience and work in a field that fascinates me',
      about: 'WHO AM I ?',
      Skills: 'SKILLS',
      aproposdemoi:
        'I m Ameni Goussi, I m 23 years old and currently I m a second year computer science engineer at INSAT .My speciality at INSAT is Network Engineer but in the same time I m very interested in the field of web development ',
      activity: 'MAIN ACTIVITIES',
      development: 'DEVELOPMENT',
      conceptiondesc:
        'Positioning, functionalities, strategy: design a site or redesign it as part of a complete overhaul',
      developmentdesc:
        'Create a new module, expand the perimeter of a site, provide new services to your customers',
      contact: 'Contact Me',
      Coordonnées: 'Contact information',
      FirstName: 'FirstName',
      LastName: 'LastName',
      Subject: 'Subject',
      Message: 'Message',
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h3 className="logo"> Ameni Goussi </h3>

          <nav>
            <ul className="nav_links">
              <li>
                <a href="#">{this.state.page1}</a>
              </li>
              <li>
                <a href="#">{this.state.page2}</a>
              </li>
              <li>
                <a href="#">{this.state.page3}</a>
              </li>
              <li>
                <a href="#">{this.state.page4}</a>
              </li>
            </ul>
          </nav>

          <button onClick={this.switchtoenglish}>En</button>
          <button onClick={this.switchtofrensh}>Fr</button>
        </header>

        <body>
          <Home description={this.state.homedescription} />
          <Aboutme
            about={this.state.about}
            aproposdemoi={this.state.aproposdemoi}
            activity={this.state.activity}
            development={this.state.development}
            conceptiondesc={this.state.conceptiondesc}
            developmentdesc={this.state.developmentdesc}
          />
          <Resume Skills={this.state.Skills} />
          <Contact
            contact={this.state.contact}
            Coordonnées={this.state.Coordonnées}
            FirstName={this.state.FirstName}
            LastName={this.state.LastName}
            Subject={this.state.Subject}
            Message={this.state.Message}
          />
        </body>

        <footer>
          <a href="#">
            <button className="haut">
              <i class="fa fa-arrow-up"></i>
            </button>
          </a>
        </footer>
      </div>
    )
  }
}

export default App
