import React from 'react'
import ReactDOM from 'react-dom'
import Clock from "./Clock";
import logo from "../../img/logo.png";
import '../../css/App.css';
import watermark from "../../img/HitLabWM.png"

class LogoAndText extends React.Component {
    render () {
        return (
            <div className="App-Logo">
                <div className="Clock-Wrapper">
                    <Clock/>
                </div>
                <div className="Watermark-Wrapper">
                  <img src={watermark} className="Watermark-Image" alt="WaterMark"/>
                </div>
                <div className="Image-Wrapper">
                    <img src={logo} alt={"LOGO"} className="Logo-Image" alt="AOTG"/>
                </div>
            </div>
      )
    }
}

ReactDOM.render(
    <LogoAndText/>,
    document.getElementById('root')
);

export default LogoAndText;
