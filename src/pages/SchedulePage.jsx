import React from 'react'
import ReactDOM from 'react-dom'
import '../css/App.css'
import '../css/Schedule.css'
import {
  HashRouter as Router,
  Link
} from "react-router-dom";
import Schedule from "../Components/SchedulePage/Schedule"

import LogoAndText from "../Components/Common/LogoAndText";
import backArrow from "../img/backArrow.png";



class SchedulePage extends React.Component {
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
                        <div className="Calendar-Wrapper">
                          <Schedule />
                        </div>
                    </div>
                </div>
        </Router>
    )}
}

ReactDOM.render(
    <SchedulePage/>,
    document.getElementById('root')
);

export default SchedulePage;
