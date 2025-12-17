import React from 'react';
import Hero from './Hero';
import InfoBar from './InfoBar';
import Services from './Services';
import Projects from './Projects';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <InfoBar />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;