import React from "react";
import LogoAndText from "./LogoAndText";
import Button from "reactstrap/lib/Button";
import ReactDOM from "react-dom";
import '../../css/WelcomePage.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "../../pages/HomePage";

class NavButtons extends React.Component {
    constructor(props) {
        super(props);

    }
    render () {
        return (
          <div className="Area-Button">
                    <Button to="/HomePage" id="start" color="primary">
                      Start
                    </Button>
          </div>
    )}
}

ReactDOM.render(
    <NavButtons/>,
    document.getElementById('root')
);

export default NavButtons;
