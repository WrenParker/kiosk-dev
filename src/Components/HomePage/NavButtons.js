import React from "react";
import LogoAndText from "../Common/LogoAndText";
import Button from "reactstrap/lib/Button";
import ReactDOM from "react-dom";
import '../../css/HomePage.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class NavButtons extends React.Component {
    constructor(props) {
        super(props);

    }
    render () {
        return (
        <Router>
        <div className="Area-Button">
                  <Link to="/map" className="map">
                    <Button id="map" to="/map" color="primary">Map</Button>
                  </Link>
                  <Link to="/weather" className="weather">
                    <Button to="/weather" id="weather" color="primary">Weather</Button>
                  </Link>
                  <Link to="/schedule" className="schedule">
                    <Button to="/schedule" id="schedule" color="primary">Schedule</Button>
                  </Link>
               </div>
        </Router>
        )
    }
}

ReactDOM.render(
    <NavButtons/>,
    document.getElementById('root')
);

export default NavButtons;