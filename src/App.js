import React from "react";
import Banner from "./Component/Banner";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Footer from "./Component/Footer";
import Portfolio from "./Component/Portfolio";
import Navbar from "./Component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Assets/Css/Responsive.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
