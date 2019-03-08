import React, { Component } from 'react';
import pdf from '../../PDF/CV-Suzette.pdf'
import ImgCV from '../../images/cv.jpg'
import './formacion.css'

export default class Formacion extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="containerPdf">
                    <div className="pdfDesc">
                        <a href={pdf} download="CV-Suzette">Descargar CV-Suzete</a>
                    </div>
                    <div className="imgCv">
                        <img src={ImgCV} alt="" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}