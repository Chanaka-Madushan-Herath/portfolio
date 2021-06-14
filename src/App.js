import React from "react";
import './App.css';
import Navibar from "./Components/Navibar/Navibar";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import Services from "./Components/Services/Services";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import {Button} from "bootstrap";

function App() {

  return (
    <div className="App">
        <BrowserRouter>

          <Navibar/>

          <dv className={"Components"}>
          <div id={"home"}>
            <Home  /></div>

            <div id={"about"}>
                <About /></div>

            <div id={"services"}>
                <Services  /></div>

            <div id={"projects"}>
                <Projects /></div>

            <div id={"contact"}>
            <Contact /></div>
        </dv>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
