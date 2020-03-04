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
import CampusMap from '../Components/MapPage/CampusMap';
import LogoAndText from "../Components/Common/LogoAndText";
import backArrow from "../img/backArrow.png";
class MapPage extends React.Component {
    constructor(props) {
      super(props);
      this.callBack = props.callBack;
      this.setPosition = this.setPosition.bind(this);
      this.state = {
        lat: 50,
        long: 50,
        buttonText: "Locations"
      };
    }

    setPosition(option) {
      this.callBack(option);
      if(option==="CotG") {
        this.setState({
            lat: 38.08634,
            long: -81.07706,
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
      if(option==="CRV") {
        this.setState({
            lat: 38.08582,
            long: -81.07981,
            buttonText: "Canyon Rim Village"
        });
      }
      if(option==="OC1") {
        this.setState({
            lat: 38.0923,
            long: -81.0779,
            buttonText: "Outback Cabins (1B)"
        });
      }
      if(option==="OC2") {
        this.setState({
            lat: 38.0921,
            long: -81.0788,
            buttonText: "Outback Cabins (2B)"
        });
      }
      if(option==="KC") {
        this.setState({
            lat: 38.0905,
            long: -81.0762,
            buttonText: "Kaymoor Cabins"
        });
      }
      if(option==="CC1") {
        this.setState({
            lat: 38.0905,
            long: -81.0782,
            buttonText: "Country Cabins (CB1-CB10)"
        });
      }
      if(option==="CC2") {
        this.setState({
            lat: 38.0906,
            long: -81.0790,
            buttonText: "Country Cabins (CB64-CB76)"
        });
      }
      if(option==="HBH") {
        this.setState({
            lat: 38.0900,
            long: -81.0791,
            buttonText: "Hemlock Bunkhouses"
        });
      }
      if(option==="CSA") {
        this.setState({
            lat: 38.08983,
            long: -81.07793,
            buttonText: "Campsites (A1-A20)"
        });
      }
      if(option==="CSB") {
        this.setState({
            lat: 38.09120,
            long: -81.07961,
            buttonText: "Campsites (B1-B18)"
        });
      }
      if(option==="CSC") {
        this.setState({
            lat: 38.09068,
            long: -81.07581,
            buttonText: "Campsites (C1-C10)"
        });
      }

      if(option!=="Locations") {
        document.getElementById('directions').className="Show-Button";
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
                                <Dropdown.Item onClick={()=>this.setPosition("CotG")}>{"Cabins on the Gorge"}</Dropdown.Item>
                                <Dropdown.Item onClick={()=>this.setPosition("MCV")}>{"Mill Creek Village"}</Dropdown.Item>
                                <Dropdown.Item onClick={()=>this.setPosition("SSC")}>{"Sunnyside Cabins"}</Dropdown.Item>
                                <Dropdown.Item onClick={()=>this.setPosition("CRV")}>{"Canyon Rim Village"}</Dropdown.Item>
                                <Dropdown.Item onClick={()=>this.setPosition("OC1")}>{"Outback Cabins (1B)"}</Dropdown.Item>
                                <Dropdown.Item onClick={()=>this.setPosition("OC2")}>{"Outback Cabins (2B)"}</Dropdown.Item>
                                <Dropdown.Item onClick={()=>this.setPosition("KC")}>{"Kaymoor Cabins"}</Dropdown.Item>
                                <Dropdown.Item onClick={()=>this.setPosition("CC1")}>{"Country Cabins (CB1-CB10)"}</Dropdown.Item>
                                <Dropdown.Item onClick={()=>this.setPosition("CC2")}>{"Country Cabins (CB64-CB76)"}</Dropdown.Item>
                                <Dropdown.Item onClick={()=>this.setPosition("HBH")}>{"Hemlock Bunkhouses"}</Dropdown.Item>
                                <Dropdown.Item onClick={()=>this.setPosition("CSA")}>{"Campsites (A1-A20)"}</Dropdown.Item>
                                <Dropdown.Item onClick={()=>this.setPosition("CSB")}>{"Campsites (B1-B18)"}</Dropdown.Item>
                                <Dropdown.Item onClick={()=>this.setPosition("CSC")}>{"Campsites (C1-C10)"}</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </ButtonGroup>
                        <div id="directions" className="Hide-Button">
                          <Link to={{
                              pathname: '/QRPage',
                              state: {
                                data: "Test"
                              }
                            }} className="Direction-Button-Wrapper">
                            <Button className="Direction-Button" variant="primary">Get Text Directions</Button>
                          </Link>
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
