import React from 'react'
import ReactDOM from 'react-dom'
import '../css/App.css'
import '../css/QR.css'
import {
  HashRouter as Router,
  Link
} from "react-router-dom";

import LogoAndText from "../Components/Common/LogoAndText";
import QRInterface from "../Components/QRPage/QRInterface";
import backArrow from "../img/backArrow.png";



class QRPage extends React.Component {
  constructor(props) {
    super(props);
    this.parentState = props.parentData;
  }
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
                <div className="QR-Wrapper">
                  <QRInterface data={this.parentState}/>
                </div>
            </div>
          </div>
        </Router>
    )}
}

ReactDOM.render(
    <QRPage/>,
    document.getElementById('root')
);

export default QRPage;
