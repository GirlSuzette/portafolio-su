import React, { Component } from 'react';
import './Terminal.css';
// import { NavLink, Link } from 'react-router-dom';



export default class Terminal extends Component {


    render() {

        return (
            <React.Fragment>
                <div className='contTerm'>
                    <div className="fakeMenu">
                        <div className="fakeButtons fakeClose"></div>
                        <div className="fakeButtons fakeMinimize"></div>
                        <div className="fakeButtons fakeZoom"></div>
                    </div>
                    <div className="fakeScreen">
                        <p className="line1 textleft1">&#91;&nbsp;&ldquo;Hola mi nombre es &rdquo;,<span className="cursor1">_</span></p>
                        <p className="line2 textleft1">&nbsp;&nbsp;&ldquo;Suzette Mulato Ramírez&rdquo;,<span className="cursor2">_</span></p>
                        <p className="line3 textleft1">&nbsp;&nbsp;&ldquo;y soy Desarrollador web.&rdquo;&nbsp;&#93;<span className="cursor3">_</span></p>
                        <p className="line4 textleft1">><span className="cursor4">_</span></p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

