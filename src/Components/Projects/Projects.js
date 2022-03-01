import React, {Component} from 'react';
import './Projects.css'
import Edoc from "../../Assests/Edoc.png";
import monitor from '../../Assests/Monitor.png'
import {Button} from "react-bootstrap";

class Projects extends Component {
    render() {
        return (
            <div className={"Project"}>
                <h1><span style={{color:"red"}}>R</span>ECENT <span style={{color:"red"}}>P</span>ROJECTS</h1>
            <div className={"Projects"}>
                <div className="container">
                    <img src={Edoc} alt="01" className="image" />
                    <div className="middle">
                        <h1 style={{color:"red", fontWeight:"bold"}}>E-DOC</h1><br/><br/>
                        <p style={{ fontWeight:"bold"}}>This web app is designed and implemented to help you channel
                            doctors. This is developed from using React and Firebase.</p>
                    </div>
                </div>
                    <div className="container">
                        <img src={monitor} alt="02" className="image" />
                        <div className="middle">
                            <h1 style={{color:"red", fontWeight:"bold"}}>Cloud Sensor Monitor</h1>
                            <p style={{ fontWeight:"bold"}}>This is a cloud-based sensor monitoring and alert management
                                platform which can be used to centrally monitor any device
                                regardless of its location. The main functionality of the system is to
                                alert on certain events based on the readings coming from the
                                sensors. This is developed from using Angular, Spring and Java.</p>
                        </div>
                    </div>
            </div>
            </div>
        );
    }
}

export default Projects;