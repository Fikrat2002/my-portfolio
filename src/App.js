import React from "react";
import NavBar from "./src/components/NavBar";
import Headline from "./src/components/Headline";
import About from "./src/components/About";
import Skills from "./src/components/Skills";
import Projects from "./src/components/Projects";
import Certificates from "./src/components/Certificates";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";

function App() {
  return (
    <div className="relative">
      <NavBar />
      <Headline />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

