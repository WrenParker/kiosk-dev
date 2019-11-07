import React from "react";
import LogoAndText from "./LogoAndText";
import Button from "reactstrap/lib/Button";
import ReactDOM from "react-dom";
import '../../css/App.css'

class NavButtons extends React.Component {
    constructor(props) {
        super(props);

    }
    render () {
        return <div className="Area-Button">
                    <Button id="map" to="/map" color="primary">Map</Button>
                    <Button to="/weather" id="weather" color="primary">Weather</Button>
                    <Button to="/schedule" id="schedule" color="primary">Schedule</Button>
               </div>
    }
}

ReactDOM.render(
    <NavButtons/>,
    document.getElementById('root')
);

export default NavButtons;