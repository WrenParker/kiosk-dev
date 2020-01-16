import React from "react";
import { Button } from 'react-bootstrap';
import ReactDOM from "react-dom";
import '../../css/HomePage.css';
import {
  HashRouter as Router,
  Link
} from "react-router-dom";

class NavButtons extends React.Component {
    render () {
        return (
        <Router>
        <div className="Area-Button">
                  <Link to="/MapPage" className="map">
                    <Button id="map" variant="primary">Map</Button>
                  </Link>
                  <Link to="/WeatherPage" className="weather">
                    <Button id="weather" variant="primary">Weather</Button>
                  </Link>
                  <Link to="/SchedulePage" className="schedule">
                    <Button id="schedule" variant="primary">Schedule</Button>
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