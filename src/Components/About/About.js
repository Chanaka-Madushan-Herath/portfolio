import React, {Component} from 'react';
import './About.css';
import picture from '../../Assests/my.jpg'

class About extends Component {
    render() {
        return (
            <div className={"About"}>
                <div className={"image"}><img src={picture}/></div>
                <div className={"description"}>
                    <h1>ABOUT ME</h1>
                </div>
            </div>
        );
    }
}

export default About;