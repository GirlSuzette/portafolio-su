import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/home/Home';
import About from './Components/about/About';
import NavBar from './Components/Nav/NavBar'
import Footer from './Components/Footer/Footer'
import Contacto from './Components/Contacto/Contacto'
import Proyecto from './Components/Proyectos/Proyectos'





class App extends Component {

  render() {

    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contacto' component={Contacto} />
          <Route exact path='/proyecto' component={Proyecto} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
