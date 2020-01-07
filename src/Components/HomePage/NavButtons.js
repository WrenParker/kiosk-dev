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
                  <Link to="/MapPage" className="map">
                    <Button id="map" color="primary">Map</Button>
                  </Link>
                  <Link to="/WeatherPage" className="weather">
                    <Button id="weather" color="primary">Weather</Button>
                  </Link>
                  <Link to="/SchedulePage" className="schedule">
                    <Button id="schedule" color="primary">Schedule</Button>
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