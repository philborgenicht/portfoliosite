import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './components/navbar.js'
import Biography from './components/biography.js'
import Education from './components/education.js'
import Home from './components/home.js'
import Projects from './components/projects.js'
import Contact from './components/contact.js'
import Footer from './components/footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">

      <Router>
      <Navbar/>

        <Route exact path={ROUTES.EDUCATION} render={()=><Education/>}/>

        <Route exact path={ROUTES.PROJECTS} render={()=><Projects/>}/>

        <Route exact path={ROUTES.BIOGRAPHY} render={()=><Biography/>}/>

        <Route exact path={ROUTES.CONTACT} render={()=><Contact/>}/>

        <Route exact path={ROUTES.HOME} render={()=><Home/>}/>
</Router>
<Footer/>
      </div>
    );
  }
}

export default App;
