import React from "react";
import LogoAndText from "../Common/LogoAndText";
import Button from "reactstrap/lib/Button";
import ReactDOM from "react-dom";
import '../../css/HomePage.css';
import '../../css/WeatherPage.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as apiKeys from "../apiKeys.json"


class WeatherInfo extends React.Component {
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
          () => this.tick(), 600000
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
      `https://api.openweathermap.org/data/2.5/weather?zip=25837,us&units=imperial&appid=${this.weatherKey}`;

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
        console.log(this.state.weatherData);
      }
      return currentTemperature;
    }

    currentDescription() {
      let currentDescription = 0;
      if(this.state.isLoaded) {
        currentDescription = this.state.weatherData.weather[0].description;
      }
      return currentDescription;
    }

    render () {
        const {hasLoaded, weatherData} = this.state;
         if(hasLoaded) { return (
          <div className="Weather-Info-Wrapper">
            <div className="Outside-Basic-Wrapper">
              <div className="Outside-Basic-Temperature">
                {this.currentTemperature() + "°" }
              </div>
              <div className="Outside-Basic-Description">
                {this.currentDescription()}
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
    <WeatherInfo/>,
    document.getElementById('root')
);

export default WeatherInfo;