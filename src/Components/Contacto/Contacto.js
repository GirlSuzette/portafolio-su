import React, { Component } from 'react';
import './Contacto.css'

export default class Contacto extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='cantainerCon'>
                    <div className="fakeMenu">
                        <div className="fakeButtons fakeClose"></div>
                        <div className="fakeButtons fakeMinimize"></div>
                        <div className="fakeButtons fakeZoom"></div>
                    </div>
                    <div className="fakeScreen">
                        <p className="line1">&#91;&nbsp;&ldquo;Si te apetece un chat&rdquo;,<span className="cursor1">_</span></p>
                        <p className="line2">&nbsp;&nbsp;&ldquo;no dudes en contactarme&rdquo;,<span className="cursor2">_</span></p>
                        <p className="line3">&nbsp;&nbsp;&ldquo;su.mulato.ramirez@gmail.com&rdquo;&nbsp;&#93;<span className="cursor3">_</span></p>
                        <p className="line4">><span className="cursor4">_</span></p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}