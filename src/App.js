import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ScrollTop from "./components/scrollTop";
import './App.css';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <ScrollTop />
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
