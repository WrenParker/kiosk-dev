import React from 'react'
import ReactDOM from 'react-dom'
import NavButtons from "./NavButtons";
import '../../css/App.css'
import '../../css/HomePage.css'
import LogoAndText from "./LogoAndText";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }
    render () {
        return (
          <Router>
            <div className="wrapper">
                      <div className="grid-container">
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