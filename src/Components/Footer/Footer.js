import React, {Component} from 'react';
import './Footer.css'
import {Button} from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
            <div className={"footer"}>
                <h6>
                    Copyright © 2020 Chanaka. All rights reserved
                </h6>
            </div>
        );
    }
}

export default Footer;