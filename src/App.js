import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portafolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
