import { BrowserRouter, Routes, Route } from 
"react-router-dom";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import About from "./pages/about/About";
import Themes from "./components/Themes";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
        
  )
}

export default App;

