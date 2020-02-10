import React from 'react'
import ReactDOM from 'react-dom'
import '../css/App.css'
import '../css/Map.css'
import {Button} from "react-bootstrap";
import {
  HashRouter as Router,
  Link
} from "react-router-dom";
import map from '../img/map.jpg'
import CampusMap from '../Components/MapPage/CampusMap'

import LogoAndText from "../Components/Common/LogoAndText";
import backArrow from "../img/backArrow.png";
class MapPage extends React.Component {
    render () {
        return(
        <Router>
          <div className="wrapper">
                    <div className="grid-container">
                      <div className="Back-Button-Wrapper">
                        <div className="Back-Button">
                          <Link to="/HomePage">
                            <img src={backArrow} className="Arrow-Image" alt="Back"/>
                          </Link>
                        </div>
                      </div>
                      <div className="Logo-Wrapper">
                            <LogoAndText/>
                      </div>
                      <div className="Map-Wrapper">
                        <CampusMap/>
                      </div>
                    </div>
                </div>
        </Router>
    )}
}

ReactDOM.render(
    <MapPage/>,
    document.getElementById('root')
);

export default MapPage;
