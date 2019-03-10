import React, { Component } from 'react';
import './about.css'


export default class About extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='contAbout'>
                    <div className="fakeMenuAbo">
                        <div className="fakeButtons fakeClose"></div>
                        <div className="fakeButtons fakeMinimize"></div>
                        <div className="fakeButtons fakeZoom"></div>
                    </div>
                    <div className='contenido'>
                        <p class="line-1 anim-typewriter"> lLorem Ipsum es simplemente el texto de relleno de las imprentas <hr />y archivos de texto.  Lorem Ipsum ha sido el texto de relleno estándar <hr />de las industrias desde el año 1500, cuando un impresor <hr />(N. del T. persona que se dedica a la imprenta) <hr /> desconocido usó una galería de textos y los mezcló de<hr /> tal manera que logró hacer un libro de textos especimen. <hr />No sólo sobrevivió 500 años, sino que tambien ingresó. </p>
                    </div>
                    <div class="box">
                        <svg width="300" height="300" viewBox="0 0 300 300" preserveAspectRatio="xMinYMin meet">
                            {/* <rect width="100%" height="300" x="15" y="30" fill="#797580" /> */}
                            <ellipse rx="95" ry="100" cx="52%" cy="80%" fill="#00AF34" />
                            <rect width="50%" height="120" x="80" y="90" rx="10" ry="0" fill="white" />
                            <ellipse rx="11" ry="20" cx="73%" cy="30%" fill="white" />
                            <ellipse rx="11" ry="20" cx="30%" cy="30%" fill="white" />
                            <ellipse rx="60" ry="40" cx="51%" cy="50%" fill="#FFD4BD" />
                            <path class="moveMouth" d="M130 160 C 150 170, 170 160, 170 160" stroke="black" fill="transparent" />
                            <circle class="moveEyes" r="5" cx="120" cy="145" />
                            <circle class="moveEyes" r="5" cx="180" cy="145" />
                            <rect width="5%" height="120" x="233" y="210" rx="2" ry="10" fill="#FFD4BD" />
                            <rect width="5%" height="120" x="62" y="210" rx="2" ry="10" fill="#FFD4BD" />
                            <rect width="7%" height="40" x="60" y="210" rx="2" ry="10" fill="#00C3FE" />
                            <rect width="7%" height="40" x="229" y="210" rx="2" ry="10" fill="#00C3FE" />
                            <rect width="50%" height="120" x="80" y="210" rx="10" ry="0" fill="#00C3FE" />
                            <rect width="5%" height="48" x="65" y="205" rx="2" ry="10" fill="green" />
                            <rect width="5%" height="48" x="230" y="205" rx="2" ry="10" fill="green" />
                        </svg>
                    </div>
                </div>
            </React.Fragment>


        );
    }
}