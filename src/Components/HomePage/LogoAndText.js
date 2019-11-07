import React from 'react'
import ReactDOM from 'react-dom'
import Clock from "../Clock";
import logo from "../../img/logo.png";
import '../../css/HomePage.css';

class LogoAndText extends React.Component {
    constructor(props) {
        super(props);
        this.className = props.className;

    }
    render () {
        return <div>
            <div>
                <div>
                    <Clock/>
                </div>
                <img src={logo} alt={"LOGO"} className="Logo-Image"/>
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