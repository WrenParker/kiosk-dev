import React, { Component } from 'react'
import ReactDOM from "react-dom";
import '../../css/Map.css';
import { Icon } from "leaflet";

import { Map, TileLayer, Rectangle } from 'react-leaflet'
//38.0943,-81.0829
//38.0844,-81.0755
const outer = [
  [38.0943, -81.0829],
  [38.0844, -81.0755],
]
const inner = [
  [38.0943, -81.0829],
  [38.0844, -81.0755],
]

type State = {
  bounds: Array<[number, number]>,
}

export default class BoundsExample extends Component<{}, State> {
  state = {
    bounds: outer,
  }

  render() {
    return (
        <Map  className="Map-Container" bounds={this.state.bounds}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
    )
  }
}
