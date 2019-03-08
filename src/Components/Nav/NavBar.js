import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'



export default class NavBar extends Component {


  render() {
    var months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let d = new Date();
    let m = d.getMonth();
    let month = (months[m]);
    // let year = d.getFullYear();
    // let x = d.getDay();
    let h = d.getHours()
    let min = d.getMinutes()


    let date = month + " " + h + ":" + min

    return (
      <React.Fragment>
        <header>
          <div className="contFixed">
            <ul class="left">
              <li class="apple">
                <i class="fa fa-apple"></i>
              </li>
              <li><Link to="/"><strong>Home</strong></Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/proyecto">Proyectos</Link></li>
              <li><Link to="/formacion">CV</Link></li>
              <li><Link to="/contacto">Contacto</Link> </li>
            </ul>
            <ul class="right">
              <li className="iconNome" id="volume-icon-li"><i className="iconNome" class="fa fa-volume-off" id="volume-icon"></i>
                <div class="submenu">
                  <ul class="volume">
                    <li class="volume">
                      <div>
                        <input type="range" min="0" max="100" value="0" id="volume" />
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li><span id="clock"></span>
                <li className="iconNome">{date}</li>
                <div class="submenu">
                  <ul>
                    <li id="date" class="noChoice"></li>
                    <li class="spacer"></li>
                    <li>View as Analog</li>
                    <li>View as Digital</li>
                    <li class="spacer"></li>
                    <li>Open Date & Time Preferences...</li>
                  </ul>
                </div>
              </li>
              <li className="iconBateria"><i class="fa fa-battery-half" aria-hidden="true"></i>

                <div class="submenu">
                  <ul>
                    <li><a href="https://harnerdesigns.com/" target="_blank">Website</a></li>
                  </ul>
                </div>
              </li>
              <li className="iconNome"><i class="fa fa-search"></i></li>
              <li className="iconNome"><i class="fa fa-bars"></i></li>
            </ul>
          </div>
        </header>
      </React.Fragment>
    );
  }
}