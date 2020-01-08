import React from 'react'
import ReactDOM from 'react-dom'
import NavButtons from "../Components/HomePage/NavButtons";
import '../css/App.css'
import '../css/HomePage.css'
import LogoAndText from "../Components/Common/LogoAndText";
import {
  HashRouter as Router,
  Link
} from "react-router-dom";
import backArrow from "../img/backArrow.png";

class HomePage extends React.Component {
    render () {
        return (
          <Router>
            <div className="wrapper">
                      <div className="grid-container">
                        <div className="Back-Button-Wrapper">
                          <div className="Back-Button">
                            <Link to="/WelcomePage">
                              <img src={backArrow} className="Arrow-Image" alt="Back"/>
                            </Link>
                          </div>
                        </div>
                          <div className="Logo-Wrapper">
                              <LogoAndText/>
                          </div>
                          <div className="NavButton-Wrapper">
                              <NavButtons/>
                          </div>
                      </div>
                  </div>
          </Router>
              )
    }
}

ReactDOM.render(
    <HomePage/>,
    document.getElementById('root')
);

export default HomePage;