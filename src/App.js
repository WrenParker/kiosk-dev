import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import logo from './img/logo.png';
import Button from '../node_modules/react-bootstrap/Button';
import Clock from './Components/Clock';


function App() {
  return (
    <div className="wrapper">
        <div className="App-Logo">
            <Clock/>
            <img src={logo} alt={"LOGO"} className="Logo-Image"/>
            <p className="Logo-Text">Adventures at WVU</p>
        </div>
        <div className="Area-Button">
            <Button id="Button-A" variant="primary">Map</Button>
            <Button id="Button-B" variant="primary">Weather</Button>
            <Button id="Button-C" variant="primary">Schedule</Button>
        </div>
    </div>
  );
}

export default App;
