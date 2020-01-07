import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './css/App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/WelcomePage";
import MapPage from "./pages/MapPage";
import WeatherPage from "./pages/WeatherPage";
import SchedulePage from "./pages/SchedulePage";



function App() {
  return (
  <Router>
  <div>
    <div>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path='/HomePage'>
          <Home />
        </Route>
        <Route path='/WelcomePage'>
          <Welcome />
        </Route>
        <Route path='/MapPage'>
          <Map />
        </Route>
        <Route path='/WeatherPage'>
          <Weather />
        </Route>
        <Route path='/SchedulePage'>
          <Schedule />
        </Route>
      </Switch>
    </div>
  </div>
  </Router>
  );
}

function Home() {
  return(
    <div>
      <HomePage />
    </div>
  )
}

function Welcome() {
  return(
    <div>
      <WelcomePage />
    </div>
  )
}

function Map() {
  return (
    <div>
      <MapPage />
    </div>
  )
}

function Weather() {
  return (
    <div>
      <WeatherPage />
    </div>
  )
}

function Schedule() {
  return (
    <div>
      <SchedulePage />
    </div>
  )
}
export default App;
