import React from "react";
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
          waterData: null,
          weatherIsLoaded: false,
          weatherHasLoaded: false,
          waterIsLoaded: false,
          waterHasLoaded: false,
        };
        this.getWeatherData();

    }

    componentDidMount() {
      this._isMounted = true;
      this.timerID = setInterval(
          () => this.tick(), 600000
      );
      this.getWeatherData();
      this.getWaterData();
    }

    tick() {

        this.setState({
            weatherIsLoaded: false,
            waterIsLoaded: false,
            weatherData: this.getWeatherData(),
            waterData: this.getWaterData(),
        });
        console.log(this.weatherData);
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
            weatherIsLoaded: true,
            weatherHasLoaded: true
          });
        }
      })
    }

    getWaterData() {
      const waterURL =
      `https://waterservices.usgs.gov/nwis/dv/?format=json&sites=03185400&siteStatus=all`;

      fetch(waterURL)
      .then(res=>res.json())
      .then(data=> {
        if(this._isMounted) {
          this.setState({
            waterData: data,
            waterIsLoaded: true,
            waterHasLoaded: true
          });
        }
      })
    }

    currentTemperature() {
      let currentTemperature = 0;
      if(this.state.weatherIsLoaded) {
        currentTemperature = Math.round(this.state.weatherData.main.temp);
      }
      return currentTemperature;
    }

    currentFeelsLike() {
      let currentFeelsLike = 0;
      if(this.state.weatherIsLoaded) {
        currentFeelsLike = Math.round(this.state.weatherData.main.feels_like);
      }
      return currentFeelsLike;
    }

    currentDescription() {
      let currentDescription = 0;
      if(this.state.weatherIsLoaded) {
        currentDescription = this.state.weatherData.weather[0].description;
      }
      return currentDescription;
    }

    currentWindSpeed() {
      let currentWindSpeed = 0;
      if(this.state.weatherIsLoaded) {
        currentWindSpeed = Math.round(this.state.weatherData.wind.speed);
      }
      return currentWindSpeed;
    }

    currentHumidity() {
      let currentHumidity = 0;
      if(this.state.weatherIsLoaded) {
        currentHumidity = Math.round(this.state.weatherData.main.humidity);
      }
      return currentHumidity;
    }

    currentWaterTemperature() {
      let currentWaterTemperature = 0;
      if(this.state.waterIsLoaded) {
        currentWaterTemperature = Math.round(((this.state.waterData.value.timeSeries[0].values[0].value[0].value) * (9/5))+32 );
      }
      return currentWaterTemperature;
    }

    render () {
        const {weatherHasLoaded, waterHasLoaded, weatherData} = this.state;
         if(weatherHasLoaded && waterHasLoaded) { return (
          <div className="Weather-Info-Wrapper">
            <div className="Outside-Basic-Wrapper">
              <div className="Outside-Basic-Large">
                {this.currentTemperature() + "°"}
              </div>
              <div className="Outside-Basic-Small">
                {"Feels Like " + this.currentFeelsLike() + "°"}
              </div>
              <div className="Outside-Basic-Small">
                {this.currentDescription()}
              </div>
            </div>
            <div className="Outside-Advanced-Wrapper">
              <div className="Outside-Advanced-Item">
                {"Wind Speed: " + this.currentWindSpeed() + "mph"}
              </div>
              <div className="Outside-Advanced-Item">
                {"Water Temperature: " + this.currentWaterTemperature() + "°"}
              </div>
              <div className="Outside-Advanced-Item">
                {"Humidity: " + this.currentHumidity() + "%"}
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