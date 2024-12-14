import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Partners from "../components/Partners";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Hero
        title={"TERAPO | OFFICE"}
        subText={"Welcome to Wellness and Wholeness"}
      />
      <About />
      <Projects />
      <Partners />
      <Contact />
    </div>
  );
};

export default Home;
