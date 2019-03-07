import React, { Component } from 'react';
import Roteador from './components/Roteador/Roteador';
import {Router, Route,Switch} from "react-router-dom";
import "./App.css"

class App extends Component {
  render() {
    return (
    	<Roteador/>	
    );
  }
}

export default App;
