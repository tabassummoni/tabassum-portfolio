import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Education from './components/Education/Education';
import Interest from './components/skills/Interest'

import CarouselImages from './components/carousel/CarouselImages.js'
import Traininng from './components/Traininng/Traininng';
import Projects from './components/Projects/Projects';
import ProjectOneDetail from './components/Projects/ProjectOneDetail';
import ProjectsTwoDetails from './components/Projects/ProjectsTwoDetails';
import Footer from './components/Footer/Footer';


class App extends Component {


  render() {
    const home = () => {
      return (
        <div>
          <div>

          <CarouselImages />
          </div>
          <About />
          <Interest />
          <Education />
          <Traininng />
          <Projects></Projects>
          <Footer></Footer>
        </div >
      )
    }
    return (
      <Router>
        {/* <Route path="/" >

        </Route> */}
        < div className="App" >


          <div className="side">
            <nav className="navbar side navbar-expand-lg navbar-light p-0" >
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" style={{ zIndex: '1' }}>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Sidebar />
              </div>
            </nav>
          </div>
          <div className="main">
            <Route path="/" exact component={home} />
            <Route path="/1stProject" exact component={ProjectOneDetail} />
            <Route path="/2ndProject" exact component={ProjectsTwoDetails} />

          </div>
        </div >
      </Router >
    );
  }
}

export default App;
