import React from 'react';
import L from 'leaflet';
import '../../css/leaflet.css';

class CampusMap extends React.Component {
  componentDidMount() {
    let southWest = L.latLng(38.0823,-81.0846)
    let northEast = L.latLng(38.0945, -81.0724)
    let bounds = L.latLngBounds(southWest, northEast);

    this.map = L.map('map', {
      maxBounds: bounds,
      center: [38.08721,-81.07914],
      zoom: 15,
      maxZoom: 17,
      minZoom: 13,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
  }

  render() {
    return (
    <div>
      <div id="map"></div>
    </div>
  )}
}

export default CampusMap;

//38.0943,-81.0829
//38.0844,-81.0755
