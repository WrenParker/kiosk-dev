import React from 'react'
import ReactDOM from "react-dom";
import { Dropdown } from 'react-bootstrap';
import CampusMap from './CampusMap'
import '../../css/Map.css'

class MapComponent extends React.Component {

  render () {
    return (
      <div className="Map-Container">
        <CampusMap />
      </div>
    )
  }
}

ReactDOM.render(
    <MapComponent />,
    document.getElementById('root')
);

export default MapComponent;
