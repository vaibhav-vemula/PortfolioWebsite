import React from 'react';
// import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Navbar from './Navbar'

import "./assets/bootstrap/css/bootstrap.min.css" 
import "./assets/bootstrap-icons/bootstrap-icons.css" 
import "./assets/boxicons/css/boxicons.min.css" 


import AOS from 'aos';
import "aos/dist/aos.css";

import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';
AOS.init();



function App() {
  
  return ( 
      <>
      <Navbar />
      
      <main className="main">
      
      <Home />
        <About />
        <Resume />
        <Projects />
        <Contact />
     </main>
            </>
        );
    }



export default App;
