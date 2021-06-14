import React, {Component} from 'react';
import './Services.css';
import mobile from '../../Assests/mobile-app-development-1.png';
import web from '../../Assests/best-templates.png'

class Services extends Component {
    render() {
        return (
            <div className={"Services"}>
                <h1><span style={{color:"red"}}>W</span>HAT I <span style={{color:"red"}}>D</span>O</h1>
                <div className={"Service"}>
                    <div >
                        <h2>WEB APP DESIGN</h2>
                        <img src={web} height={"200px"} width={"200px"}/>
                        <p>I am more capable of HTML, bootstrap & CSS.
                            I am also capable of developing with react for front-end. For back-end I am more capable of JavaScript and PHP.</p>
                    </div>
                    <div>
                        <h2>MOBILE APP DESIGN</h2>
                        <img src={mobile} height={"200px"} width={"200px"}/>
                        <p>  I am capable of developing mobile apps using Kotlin.
                            As it is backed by Google and it is somewhat easy to manipulate.</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default Services;