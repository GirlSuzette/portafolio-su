import React, { Component } from 'react';
import './proyecto.css'

export default class Proyecto extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="contProy">
                    <div className="fakeMenuP">
                        <div className="fakeButtons fakeClose"></div>
                        <div className="fakeButtons fakeMinimize"></div>
                        <div className="fakeButtons fakeZoom"></div>
                    </div>
                    <div className="fakeScreenP">
                        <p className="line1P textleft">Proyectos<span className="cursor1P">_</span></p>
                        <p className="line4P textleft">><span className="cursor4P">_</span></p>
                        <p className="line1P textleft">Money Home<span className="cursor1P">_</span></p>
                        <p className="line2P textleft">React Front-end. REST API con Node/Express/Mongoose.<span className="cursor2P">_</span></p>
                        <p className="line3P textleft">Deployed: https://money-home.netlify.com<span className="cursor3P">_</span></p>
                        <p className="line4P textleft">><span className="cursor4P">_</span></p>
                        <p className="line1P textleft">Mallory Furniture<span className="cursor1P">_</span></p>
                        <p className="line2P textleft">React Front-end.<span className="cursor2P">_</span></p>
                        <p className="line3P textleft">Deployed: https://project-mallory-furniture.netlify.com<span className="cursor3P">_</span></p>
                        <p className="line4P textleft">><span className="cursor4P">_</span></p>
                        <p className="line1P textleft">To-Do-List<span className="cursor1P">_</span></p>
                        <p className="line2P textleft">React Front-end.<span className="cursor2P">_</span></p>
                        <p className="line3P textleft">Deployed:  https://lab-react-to-do-list.netlify.com/<span className="cursor3P">_</span></p>
                        <p className="line4P textleft">><span className="cursor4P">_</span></p>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}