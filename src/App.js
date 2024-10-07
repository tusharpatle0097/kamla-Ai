import React from 'react';
import './App.css'
import Navigation from './Components/Navigation'
import HeroSection from './Components/HeroSection'
import Features from './Components/Features';
import About from './Components/About';
import Services from './Components/Services';
import Gallery from './Components/Gallery';
import Nav from './Components/Nav';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import Team from './Components/Team';

const App = () => {

  return (
    <>
      {/* <Navigation /> */}
      {/* <Nav/>
      <HeroSection/>
      <Features/>
      <Services/>
      <Gallery/>
      <About/> */}
      {/* <AboutUs/> */}
      {/* <Contact/>
      <Footer/> */}

      <Nav />
      <div id="Home">
        <HeroSection />
      </div>
      <div id="Features">
        <Features />
      </div>
      <div id="Services">
        <Services />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Team">
        <Team />
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App