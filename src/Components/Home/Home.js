import React, {Component} from 'react';
import "./Home.css"
import {Button} from "react-bootstrap";


const Home =()=> {
    const URL = "https://github.com/Chanaka-Madushan-Herath/My_web_site/raw/master/src/Assests/Chanaka%20Herath.pdf";
        return (
            <div className={"home"}>
                <div className={"titles"}>
                    <div className={"t2"} ><h2>Hey, I'm</h2></div>
                    <div className={"t3"}><h1>Chanaka</h1></div>
                    <a href={URL}><Button variant="outline-primary" >Download My CV</Button>{' '}</a>
                </div>
            </div>
        );
    }


export default Home;