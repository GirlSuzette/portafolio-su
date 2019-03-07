import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/home/Home';
import About from './Components/about/About';
import NavBar from './Components/Nav/NavBar'




class App extends Component {

  render() {

    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
