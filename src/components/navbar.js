import React, {Component} from 'react'
import Biography from './biography.js'
import Education from './education.js'
import Home from './home.js'
import Projects from './projects.js'
import Contact from './contact.js'
import * as ROUTES from '../constants/routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render(){
    return(


  <nav class="navbar navbar-expand-sm  navbar-dark bg-dark sticky-top">


    <div class="" id="navbarSupportedContent">
    <nav className='flex-sm-column'>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Link to={ROUTES.CONTACT}><button className='btn btn-sm btn-info'>Contact</button></Link>
        </li>
        <li class="nav-item">
          <Link to={ROUTES.EDUCATION}><button className='btn btn-sm btn-info'>Education</button></Link>
        </li>
        <li class="nav-item">
          <Link to={ROUTES.PROJECTS}><button className='btn btn-sm btn-info'>Projects</button></Link>
        </li>
        <li class="nav-item">
          <Link to={ROUTES.BIOGRAPHY}><button className='btn btn-sm btn-info'>Biography</button></Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Profiles
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="https://linkedin.com/in/phillipborgenicht">LinkedIn</a>
            <a class="dropdown-item" href="https://github.com/philborgenicht">GitHub</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="https://galvanize.com">Galvanize</a>
          </div>
        </li>
        <li class="nav-item">
          <Link to={ROUTES.HOME}><button className='btn btn-sm btn-info'>Home</button></Link>
        </li>
      </ul>
    </nav>

    </div>
  </nav>







    )
  }
}

export default Navbar
