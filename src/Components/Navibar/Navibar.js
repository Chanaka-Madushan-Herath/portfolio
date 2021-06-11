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
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"   />
                    <Navbar.Collapse id="responsive-navbar-nav" className={"links"}>
                        <Nav className="mr-auto">
                           <div className={"link"}><Nav.Link href={"#home"}>Home</Nav.Link> </div>
                        <div className={"link"}><Nav.Link href={"#about"}>About</Nav.Link> </div>
                            <div className={"link"}><Nav.Link href={"#services"}>Services</Nav.Link> </div>
                        <div className={"link"}><Nav.Link href={"#projects"}>Projects</Nav.Link></div>
                            <div className={"link"}><Nav.Link href={"#contact"} >Contact</Nav.Link></div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
}

export default Navibar;