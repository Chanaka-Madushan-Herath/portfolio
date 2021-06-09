import React from "react";
import './App.css';
import Navibar from "./Components/Navibar/Navibar";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navibar/>
          <div id={"home"}>
            <Home  /></div>
            <div id={"contact"}>
            <Contact /></div>
        </BrowserRouter>
    </div>
  );
}

export default App;
