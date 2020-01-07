import React from 'react'
import ReactDOM from 'react-dom'
import Clock from "../Clock";
import logo from "../../img/logo.png";
import '../../css/HomePage.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class LogoAndText extends React.Component {
    constructor(props) {
        super(props);

    }
    render () {
        return (
          <Router>
            <div className="App-Logo">
                <div className="Clock-Wrapper">
                    <Clock/>
                </div>
                <div className="Image-Wrapper">
                    <img src={logo} alt={"LOGO"} className="Logo-Image"/>
                </div>
                <p className="Logo-Text">Adventures on the Gorge</p>
            </div>
        </Router>
      )
    }
}

ReactDOM.render(
    <LogoAndText/>,
    document.getElementById('root')
);

export default LogoAndText;
