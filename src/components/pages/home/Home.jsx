import React from "react";
import About from "./about/About";
import Banner from "./banner/Banner";
import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";
import Contact from "./contact/Contact";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
