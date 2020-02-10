import React, { Component } from 'react'
import ReactDOM from "react-dom";
import '../../css/Map.css';
import { Map, TileLayer, Rectangle } from 'react-leaflet';
import { Icon } from "leaflet";

const outer = [
  [50.505, -29.09],
  [52.505, 29.09],
]
const inner = [
  [49.505, -2.09],
  [53.505, 2.09],
]

type State = {
  bounds: Array<[number, number]>,
}

class MyMap extends Component<{}, State> {
  state = {
    bounds: outer,
  }

  onClickInner = () => {
    this.setState({ bounds: inner })
  }

  onClickOuter = () => {
    this.setState({ bounds: outer })
  }

  render() {
    return (
      <div className="Map-Wrapper">
        <div className="Map-Container">
          <Map bounds={this.state.bounds}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Rectangle
              bounds={outer}
              color={this.state.bounds === outer ? 'red' : 'white'}
              onClick={this.onClickOuter}
            />
            <Rectangle
              bounds={inner}
              color={this.state.bounds === inner ? 'red' : 'white'}
              onClick={this.onClickInner}
            />
          </Map>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
    <MyMap />,
    document.getElementById('root')
);

export default MyMap;
