import React from 'react'
import ReactDOM from 'react-dom'
import Clock from "../Clock";
import logo from "../../img/logo.png";
import '../../css/HomePage.css';

class LogoAndText extends React.Component {
    constructor(props) {
        super(props);

    }
    render () {
        return <div>
            <div className="App-Logo">
                <div className="Clock-Wrapper">
                    <Clock/>
                </div>
                <div className="Image-Wrapper">
                    <img src={logo} alt={"LOGO"} className="Logo-Image"/>
                </div>
                <p className="Logo-Text">Adventures at WVU</p>
            </div>
        </div>
    }
}

ReactDOM.render(
    <LogoAndText/>,
    document.getElementById('root')
);

export default LogoAndText;
