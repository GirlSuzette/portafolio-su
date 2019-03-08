import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import github from '../../images/Github.png'
import LinkedIn from '../../images/LinkedIn.png'
import MoneyHome from '../../images/logo.png'
import JavaScript from '../../images/jv.png'
import react from '../../images/react-icons.svg'
import Node from '../../images/nodejs.png'
import slack from '../../images/slack.png'
import visual from '../../images/visual.png'


export default class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <div id="container">
                    <div id="dock">
                        <ul>
                            <li>
                                <span>JavaScript</span> <Link to="#"><img src=
                                    {JavaScript} alt="" />
                                </Link>
                            </li>
                            <li>
                                <span>React</span> <Link to="#"><img src=
                                    {react} alt="" />
                                </Link>
                            </li>
                            <li>
                                <span>Money Home</span> <a href="https://money-home.netlify.com/" target="_blank"><img src=
                                    {MoneyHome} alt="" /></a>
                            </li>
                            <li>
                                <span>Nodejs</span> <Link to="#"><img src=
                                    {Node} alt="" /></Link>
                            </li>
                            <li>
                                <span>Github</span> <a href="https://github.com/GirlSuzette" target="_blank"><img src=
                                    {github} alt="" /></a>
                            </li>
                            <li>
                                <span>#Slack</span> <Link to="#"><img src=
                                    {slack} alt="" /></Link>
                            </li>
                            <li>
                                <span>Visual Studio Code</span> <Link to="#"><img src=
                                    {visual} alt="" /></Link>
                            </li>
                            <li>
                                <span>LinkedIn</span> <a href="https://www.linkedin.com/in/suzettemulato/" target="_blank"><img src=
                                    {LinkedIn} alt="" /></a>
                            </li>
                            <li>
                                <span>iTunes</span> <Link to="#"><img src=
                                    "https://forums.macrumors.com/attachments/itunes-1024x1024-png.565323/" alt="" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* <!-- FOLLOW --> */}
                <Link className="Follow" to="#" target="blank_"></Link>
            </React.Fragment>
        );
    }
}