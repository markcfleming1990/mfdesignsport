import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Language from "./Components/Language";
import Colab from "./Components/Collab";
import Projects from "./Components/projectCards";
import Email from "./Components/Email";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Language />
      <Projects />
      <Colab />
      <Routes>
        <Route path="/email" element={<Email />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
