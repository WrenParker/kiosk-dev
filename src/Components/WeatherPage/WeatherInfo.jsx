import React from "react";
import LogoAndText from "../Common/LogoAndText";
import Button from "reactstrap/lib/Button";
import ReactDOM from "react-dom";
import '../../css/HomePage.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class WeatherPage extends React.Component {
    constructor(props) {
        super(props);

    }

    state = {
      fullData: [],
      dailyData: []
    }

    componentDidMount = () => {
      this._isMounted = true;
      const weatherURL =
      `https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=8ad49bb55f5753905e485cfc386723e2`;

      fetch(weatherURL)
      .then(res=>res.json())
      .then(data=> {
        console.log(data)
        const weather = data;
      })
    }

    render () {



        return (
        <div>

        </div>
        )
    }
}

ReactDOM.render(
    <WeatherPage/>,
    document.getElementById('root')
);

export default WeatherPage;