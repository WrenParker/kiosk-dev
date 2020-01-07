import React from 'react'
import ReactDOM from 'react-dom'
import '../css/App.css'
import '../css/MapPage.css'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import map from '../img/map.jpg'

import LogoAndText from "../Components/Common/LogoAndText";
import NavButtons from "../Components/WelcomePage/NavButtons"
import backArrow from "../img/backArrow.png";
class MapPage extends React.Component {
    constructor(props) {
        super(props);

    }
    render () {
        return(
        <Router>
          <div className="wrapper">
                    <div className="grid-container">
                      <div className="Back-Button-Wrapper">
                        <div className="Back-Button">
                          <Link to="/WelcomePage">
                            <img src={backArrow} className="Arrow-Image" />
                          </Link>
                        </div>
                      </div>
                        <div className="Logo-Wrapper">
                            <LogoAndText/>
                        </div>
                        <div className="Map-Wrapper">
                          <img className="Map-Image" src={map} />
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
