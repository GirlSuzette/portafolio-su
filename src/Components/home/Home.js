import React, { Component } from 'react';
import './Home.css';
import Terminal from '../Terminal/Terminal';





export default class Home extends Component {


    render() {
        return (
            <React.Fragment>
                <div className="cantainerCon">
                    <Terminal />
                </div>
            </React.Fragment>
        );
    }
}