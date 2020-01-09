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
import * as apiKeys from "../apiKeys.json"


class WeatherPage extends React.Component {
    _isMounted = false;
    constructor(props, weatherKey, weatherData) {
        super(props);
        this.weatherKey = apiKeys.default.keys.weather;
        this.state = {
          weatherData: null,
          isLoaded: false,
          hasLoaded: false
        };
        this.getWeatherData();

    }

    componentDidMount() {
      this._isMounted = true;
      this.timerID = setInterval(
          () => this.tick(), 10000
      );
      this.getWeatherData();
    }

    tick() {

        this.setState({
            isLoaded: false,
            weatherData: this.getWeatherData()
        });
    }

    componentWillUnmount() {
      this._isMounted = false;
      clearInterval(this.timerID);
    }

    getWeatherData() {
      const weatherURL =
      `https://api.openweathermap.org/data/2.5/weather?zip=94040,us&units=imperial&appid=${this.weatherKey}`;

      fetch(weatherURL)
      .then(res=>res.json())
      .then(data=> {
        if(this._isMounted) {
          this.setState({
            weatherData: data,
            isLoaded: true,
            hasLoaded: true
          });
        }
      })
    }

    currentTemperature() {
      let currentTemperature = 0;
      if(this.state.isLoaded) {
        currentTemperature = Math.round(this.state.weatherData.main.temp);
      }
      return currentTemperature;
    }

    render () {
        const {hasLoaded, weatherData} = this.state;
         if(hasLoaded) { return (
          <div className="Weather-Info-Wrapper">
            <div className="Outside-Temperature">
              <div className="Outside-Temperature-Text">
                {this.currentTemperature() + "°" }
              </div>
            </div>
          </div>
      )}
      else {
        return (
          <div>
          </div>
        )
      }
    }
}

ReactDOM.render(
    <WeatherPage/>,
    document.getElementById('root')
);

export default WeatherPage;