import React, { Component } from 'react'
import L from 'leaflet';
import '../../css/leaflet.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default class CampusMap extends Component<{}, State> {
  state = {
    lat: 38.08721,
    lng: -81.07914,
    zoom: 15,
  }



  render() {
    const pointerIcon = new L.Icon({
      iconUrl: '../../img/pin.png',
      iconRetinaUrl: '../../img/pin.png',
      iconAnchor: [5, 55],
      popupAnchor: [10, -44],
      iconSize: [25, 55]
    });
    let bounds = L.latLngBounds(L.latLng(38.0823,-81.0846), L.latLng(38.0945, -81.0724));
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom} maxBounds={bounds} maxZoom={17} minZoom={13}>
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
      <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
      </Map>

    )
  }
}