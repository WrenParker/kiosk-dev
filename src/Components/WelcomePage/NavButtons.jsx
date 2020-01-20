import React from "react";
import { Button } from 'react-bootstrap';
import ReactDOM from "react-dom";
import '../../css/WelcomePage.css';
import {
  HashRouter as Router,
  Link
} from "react-router-dom";
const { ipcRenderer } = require('electron');

class NavButtons extends React.Component {
    render () {
        return (
          <Router>
          <div className="Area-Button">
              <Link to="/HomePage" className="start">
                    <Button to="/HomePage" id="start-button" variant="primary">
                        Start
                    </Button>
              </Link>
          </div>
        </ Router>
    )}
}


export default NavButtons;
