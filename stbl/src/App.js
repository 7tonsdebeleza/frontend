import React, { Component } from 'react';
import Roteador from './components/Roteador/Roteador';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import WOW from 'wow.js';

class App extends Component {
  
  componentDidMount() {
    new WOW().init();
  }

  render() {
    return (
    	<Roteador/>	
    );
  }
}

export default App;
