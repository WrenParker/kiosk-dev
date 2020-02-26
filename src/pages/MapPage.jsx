import React from 'react'
import ReactDOM from 'react-dom'
import '../css/App.css'
import '../css/Map.css'
import {Button, ButtonGroup, Dropdown} from "react-bootstrap";
import {
  HashRouter as Router,
  Link
} from "react-router-dom";
import map from '../img/map.jpg'
import CampusMap from '../Components/MapPage/CampusMap'

import LogoAndText from "../Components/Common/LogoAndText";
import backArrow from "../img/backArrow.png";
class MapPage extends React.Component {
    constructor(props) {
      super(props);
      this.setPosition = this.setPosition.bind(this);
      this.state = {
        lat: 50,
        long: 50,
        buttonText: "Locations"
      };
    }

    setPosition(option) {
      if(option==="CotG") {
        this.setState({
            lat: 38.08663,
            long: -81.07836,
            buttonText: "Cabins on the Gorge"
        });
      }
      if(option==="MCV") {
        this.setState({
            lat: 38.08823,
            long: -81.07913,
            buttonText: "Mill Creek Village"
        });
      }
      if(option==="SSC") {
        this.setState({
            lat: 38.09040,
            long: -81.07707,
            buttonText: "Sunnyside Cabins"
        });
      }
    }

    render () {
        let message = "";
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
                      <div className="Map-Container">
                        <ButtonGroup justified>
                          <Dropdown className="Drop-Menu">
                              <Dropdown.Toggle variant="primary">
                                {this.state.buttonText}
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item onClick={()=>this.setPosition("CotG")}>Cabins on the Gorge</Dropdown.Item>
                                <Dropdown.Item onClick={()=>this.setPosition("MCV")}>Mill Creek Village</Dropdown.Item>
                                <Dropdown.Item onClick={()=>this.setPosition("SSC")}>Sunnyside Cabins</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </ButtonGroup>
                        <div className="Direction-Button">
                          <ButtonGroup justified>
                            <Button variant="primary">
                              Get Text Directions
                            </Button>
                          </ButtonGroup>
                        </div>
                        <div className="Map">
                          <CampusMap lat={this.state.lat} long={this.state.long} message={message}/>
                        </div>
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
