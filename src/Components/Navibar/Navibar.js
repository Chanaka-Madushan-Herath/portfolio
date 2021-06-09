import React, {useState} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import "./Navibar.css"

const Navibar =()=> {

    const [bg,setbg]=useState('transparent')

    document.addEventListener('scroll', () => {
        if (window.scrollY >250) {
           setbg("dark");
        } else {
           setbg("transparent");
        }
    });

        return (
            <div>
                <Navbar fixed={"top"} className={"navbar"} collapseOnSelect expand="lg" bg={bg} variant="dark">
                    <Navbar.Brand  className={"tittle"}>
                        <h1><span>C</span>hanaka <span >H</span>erath</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className={"links"}>
                           <div className={"link"}><a href={"#home"}>Home</a> </div>
                            <div className={"link"}><a href={"#services"}>Services</a> </div>
                        <div className={"link"}><a href={"#projects"}>Projects</a></div>
                            <div className={"link"}><a href={"#about"}>About</a> </div>
                            <div className={"link"}><a href={"#contact"} >Contact</a></div>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
}

export default Navibar;