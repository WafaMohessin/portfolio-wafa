import React from 'react'

import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutCotent from '../components/AboutCotent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2  heading="ABOUT." text="I am Front-End Developer" />
      <AboutCotent/>
      <Footer />
    </div>
  )
}

export default About; 