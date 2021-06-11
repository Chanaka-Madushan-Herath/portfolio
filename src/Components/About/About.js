import React, {Component} from 'react';
import './About.css';
import picture from '../../Assests/my.jpg'

class About extends Component {
    render() {
        return (
            <div className={"About"}>
                <div className={"Image"}><img src={picture} height={"300px"} width={"300px"}/></div>
                <div className={"description"}>
                    <h1><span style={{color:"red"}}>ABOUT</span> ME</h1><br/>
                    <h2>Software Engineering Undergraduate</h2><br/>
                    <p>
                        I'm a third-year Software Engineering undergraduate at the University of Kelaniya.
                        I went to Nugawela Central College for my O/L.
                        Then I moved to Kingswood College for my A/l.
                        After A/L I got selected for the software engineering degree program at the University of Kelaniya.
                    </p><br/>
                </div>
            </div>
        );
    }
}

export default About;