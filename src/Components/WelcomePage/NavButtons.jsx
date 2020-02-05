import React from "react";
import { Button } from 'react-bootstrap';
import '../../css/WelcomePage.css';
import {
  HashRouter as Router,
  Link
} from "react-router-dom";

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
