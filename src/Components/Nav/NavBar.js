import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from "react-bulma-components/full";
import './NavBar.css'



export default class NavBar extends Component {

  render() {
    return (
      <React.Fragment>
        <header>
          <ul class="left">
            <li class="apple">
              <i class="fa fa-apple"></i>
              <div class="submenu">
                <ul>
                  <li>About This Mac</li>
                  <li>Software Update...</li>
                  <li>Mac OS X Software...</li>
                  <li class="spacer"></li>
                  <li>System Preferences...</li>
                  <li class="hasSubMenu">Dock</li>
                  <li class="spacer"></li>
                  <li class="hasSubMenu">Recent Items</li>
                  <li class="spacer"></li>
                  <li class="shortcut" shortcut="&#x2325;&#x2318;&#x238B;">Force Quit...</li>
                  <li class="spacer"></li>
                  <li>Sleep</li>
                  <li>Restart...</li>
                  <li>Shut Down...</li>
                  <li class="spacer"></li>
                  <li class="shortcut" shortcut="&#x21E7;&#x2318;Q">Log Out Jack Harner...</li>
                </ul>
              </div>
            </li>
            <li><strong>Finder</strong>
              <div class="submenu">
                <ul>
                  <li>About Finder</li>
                  <li class="spacer"></li>
                  <li class="shortcut" shortcut="&#x2318;,">Preferences...</li>
                  <li class="spacer"></li>
                  <li class="shortcut" shortcut="&#x21E7;&#x2318;&#x232b;">Empty Trash...</li>

                  <li>Secure Empty Trash...</li>
                  <li class="spacer"></li>
                  <li class="hasSubMenu">Services</li>
                  <li class="spacer"></li>
                  <li class="shortcut" shortcut="&#x2318;H">Hide Finder</li>

                  <li class="shortcut" shortcut="&#x2325;&#x2318;H">Hide Others</li>

                  <li class="noChoice">Show All</li>

                </ul>
              </div>
            </li>
            <li>File
						<div class="submenu">
                <ul>
                  <li class="shortcut" shortcut="&#x2318;N">New Finder Window</li>
                  <li class="shortcut" shortcut="&#x21E7;&#x2318;N">New Folder</li>
                  <li class="shortcut noChoice" shortcut="&#x21E7;&#x2318;N">New Folder With Selection</li>
                  <li class="shortcut" shortcut="&#x2325;&#x2318;N">New Smart Folder</li>
                  <li>New Burn Folder</li>
                  <li class="shortcut noChoice" shortcut="&#x2318;O">Open</li>
                  <li class="hasSubMenu noChoice">Open With</li>
                  <li class="shortcut noChoice" shortcut="&#x2318;P">Print</li>
                  <li class="shortcut noChoice" shortcut="&#x2318;W">Close Window</li>
                  <li class="spacer"></li>
                  <li class="shortcut" shortcut="&#x2318;I">Get Info</li>
                  <li class="spacer"></li>
                  <li class="noChoice">Compress</li>
                  <li class="spacer"></li>
                  <li class="shortcut noChoice" shortcut="&#x2318;D">Duplicate</li>
                  <li class="shortcut noChoice" shortcut="&#x2318;L">Make Alias</li>
                  <li class="shortcut noChoice" shortcut="&#x2318;Y">Quick Look</li>
                  <li class="shortcut noChoice" shortcut="&#x2318;R">Show Original</li>
                  <li class="shortcut noChoice" shortcut="&#x21E7;&#x2318;P">Add to Dock</li>
                  <li class="spacer"></li>
                  <li class="shortcut noChoice" shortcut="&#x2318;&#x232b;">Move to Trash</li>
                  <li class="shortcut noChoice" shortcut="&#x2318;E">Eject</li>
                  <li>Burn "Desktop" to Disc...</li>
                  <li class="spacer"></li>
                  <li class="shortcut" shortcut="&#x2318;F">Find</li>
                </ul>
              </div>
            </li>
            <li>Edit
						<div class="submenu">
                <ul>
                  <li class="noChoice shortcut" shortcut="&#x2318;Z">Undo</li>
                  <li class="noChoice shortcut" shortcut="&#x21E7;&#x2318;Z">Redo</li>
                  <li class="spacer"></li>
                  <li class="shortcut" shortcut="&#x2318;X">Cut</li>
                  <li class="shortcut" shortcut="&#x2318;C">Copy</li>
                  <li class="shortcut" shortcut="&#x2318;V">Paste</li>
                  <li class="shortcut" shortcut="&#x2318;A">Select All</li>
                  <li class="spacer"></li>
                  <li>Show Clipboard</li>
                  <li class="spacer"></li>
                  <li class="shortcut" shortcut="fn fn">Start Dictation</li>
                  <li>Special Characters...</li>
                </ul>
              </div>
            </li>
            <li>View
						<div class="submenu">
                <ul>
                  <li class="noChoice shortcut" shortcut="&#x2318;1">as Icons</li>
                  <li class="noChoice shortcut" shortcut="&#x2318;2">as List</li>
                  <li class="noChoice shortcut" shortcut="&#x2318;3">as Columns</li>
                  <li class="noChoice shortcut" shortcut="&#x2318;4">as Cover Flow</li>
                  <li class="spacer"></li>
                  <li class="noChoice">Clean Up Selection</li>
                  <li class="hasSubMenu">Clean Up By</li>
                  <li class="hasSubMenu">Sort By</li>
                  <li class="spacer"></li>
                  <li class="noChoice">Hide Path Bar</li>
                  <li class="noChoice shortcut" shortcut="&#x2318;/">Hide Status Bar</li>
                  <li class="noChoice shortcut" shortcut="&#x2325;&#x2318;S">Hide Sidebar</li>
                  <li class="spacer"></li>
                  <li class="noChoice shortcut" shortcut="&#x2325;&#x2318;T">Toolbar</li>
                  <li class="noChoice">Customize Toolbar...</li>
                  <li class="spacer"></li>
                  <li class="shortcut" shortcut="&#x2318;J">Show View Options</li>
                </ul>
              </div>
            </li>
            <li>Go
						<div class="submenu">
                <ul>
                  <li class="shortcut noChoice" shortcut="&#x2318;[">Back</li>
                  <li class="shortcut noChoice" shortcut="&#x2318;]">Forward</li>
                  <li class="shortcut" shortcut="&#x2318;&uarr;">Enclosing Folder</li>
                  <li class="spacer"></li>
                  <li class="hasSubMenu">Recent Folders</li>
                  <li class="spacer"></li>
                  <li class="shortcut" shortcut="&#x21E7;&#x2318;G">Go to Folder...</li>
                  <li class="shortcut" shortcut="&#x2318;K">Connect to Server...</li>
                </ul>
              </div>
            </li>
            <li>Window
						<div class="submenu">
                <ul>
                  <li class="shortcut noChoice" shortcut="&#x2318;M">Minimize</li>
                  <li class="noChoice">Zoom</li>
                  <li class="shortcut noChoice" shortcut="&#x2318;`">Cycle Through Windows</li>
                  <li class="spacer"></li>
                  <li class="noChoice">Bring All to Front</li>
                </ul>
              </div>
            </li>
            <li>Help
						<div class="submenu">
                <ul>
                  <li class="search">Search
												<input id="search" type="text"></input>
                  </li>
                  <li>Help Center</li>
                </ul>
              </div>
            </li>
          </ul>
          <ul class="right">
            <li><a href="https://www.codepen.io/jackharner" target='_blank'><i class="fa fa-codepen"></i></a></li>
            <li><a href="https://www.twitter.com/jackharner" target='_blank'><i class="fa fa-twitter"></i></a></li>
            <li id="volume-icon-li"><i class="fa fa-volume-off" id="volume-icon"></i>
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
              <li>Jack Harner
						<div class="submenu">
                  <ul>
                    <li><a href="https://harnerdesigns.com/" target="_blank">Website</a></li>
                  </ul>
                </div>
              </li>
              <li><i class="fa fa-search"></i></li>
              <li><i class="fa fa-bars"></i></li>
		</ul>
</header>
      </React.Fragment>
        );
      }
}