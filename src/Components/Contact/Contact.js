import React, {Component} from 'react';
import "./Contact.css"
import fb from '../../Assests/logo-facebook-512.png';
import insta from'../../Assests/insta.png';
import  github from '../../Assests/github.png';
import linkedin from '../../Assests/linkedin-round.png'
import medium from '../../Assests/medium-logo.png'
import phone from '../../Assests/Untitled-1.jpg';
import location from '../../Assests/Untitled-2.jpg';
import mail from '../../Assests/Untitled-3.jpg';
import up from '../../Assests/up.png';

class Contact extends Component {

    render() {
        const fbLink ="https://www.facebook.com/chanaka.herath.3150/";
        const instaLink ="https://www.instagram.com/chanaka_m_herath/";
        const gitLink ="https://github.com/Chanaka-Madushan-Herath";
        const linkedinLink ="https://www.linkedin.com/in/chanaka-madushan/";
        const mediumLink ="https://chanaka-herath-1998.medium.com/";
        return (
            <div className={"contacts"}>
                <div>
                    <h1><span style={{color:"red"}}>C</span>ONTACT <span style={{color:"red"}}>I</span>NFO</h1><br/>
                </div>
            <div className={"contact"}>
                <div className={"info"}>
                    <div>
                        <img src={phone}/>
                    </div>
                    <div >
                        <h2>Phone</h2>
                        <h6>
                            +94-767025709
                        </h6>
                    </div>

                </div>
                <div className={"info"}>
                    <div>
                        <img src={mail}/>
                    </div>
                    <div >
                        <h2>Email</h2>
                        <h6>
                            chanaka.herath.1998@gmail.com<br/>
                            herathhm_se17017@stu.kln.ac.lk
                        </h6>
                    </div>

                </div>
                <div className={"info"}>
                    <div>
                        <img src={location}/>
                    </div>
                    <div >
                        <h2>Address</h2>
                        <h6>
                            NO.195, Aladeniya,<br/> Wreallagama,<br/> Kandy, Srilanka
                        </h6>
                    </div>

                </div>
            </div>
                <div>
                    <br/><h2 style={{textAlign:"center"}}>FIND ME ON:</h2><br/>
                    <div className={"find"}>
                        <a href={fbLink}><img src={fb} width={"90px"} alt={"Facebook"}/></a>
                        <a href={instaLink}> <img src={insta}  width={"120px"} alt={"Instagram"}/></a>
                        <a href={linkedinLink}><img src={linkedin} width={"90px"} alt={"Linkedin"}/></a>
                        <a href={mediumLink}><img src={medium} width={"120px"} alt={"Medium"}/></a>
                        <a href={gitLink}><img src={github} width={"90px"} alt={"Github"}/></a>
                </div>
                </div>
                <a href={"#home"}><img src={up} width={"90px"} alt={"go to home"}/></a>
            </div>
        );
    }
}

export default Contact;