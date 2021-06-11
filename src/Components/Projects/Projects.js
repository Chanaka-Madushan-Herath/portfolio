import React, {Component} from 'react';
import './Projects.css'
import picture from "../../Assests/my.jpg";

class Projects extends Component {
    render() {
        return (
            <div className={"Projects"}>
                <div className="container">
                    <img src={picture} alt="Avatar" className="image" />
                    <div className="middle">
                        <div className="text">John Doe</div>
                    </div>
                </div>
                    <div className="container">
                        <img src={picture} alt="Avatar" className="image" />
                        <div className="middle">
                            <div className="text">lands</div>
                        </div>
                    </div>
                <div className="container">
                    <img src={picture} alt="Avatar" className="image" />
                    <div className="middle">
                        <div className="text">Home</div>
                    </div>
                </div>
                <div className="container">
                    <img src={picture} alt="Avatar" className="image" />
                    <div className="middle">
                        <div className="text">Home</div>
                    </div>
                </div>
                <div className="container">
                    <img src={picture} alt="Avatar" className="image" />
                    <div className="middle">
                        <div className="text">Home</div>
                    </div>
                </div>
                <div className="container">
                    <img src={picture} alt="Avatar" className="image" />
                    <div className="middle">
                        <div className="text">Home</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;