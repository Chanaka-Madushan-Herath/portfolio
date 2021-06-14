import React, {Component} from 'react';
import "./Home.css"
import {Button} from "react-bootstrap";


const Home =()=> {
    const URL = "https://raw.githubusercontent.com/Chanaka-Madushan-Herath/My_web_site/545fd44493a1e7f8429dbc9807a7b0a9f3bad330/src/Assests/CHANAKA%20MADUSHAN-%20CV.pdf";
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