import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../css/App.css';
import HomePage from "../Components/HomePage/HomePage";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function Home() {
  return (
    <div>
      <Router>
        <Switch>
          <Route to="/Map">
            <Map />
          </Route>
          <Route to="/Weather">
            <Weather />
          </Route>
          <Route to="/Schedule">
            <Schedule />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Map() {
  return(
    <div>
      {/*<MapPage />*/}
    </div>
  )
}

function Schedule() {
  return(
    <div>
      {/*<SchedulePage />*/}
    </div>
  )
}

function Weather() {
  return(
    <div>
      {/*<WeatherPage />*/}
    </div>
  )
}

export default Home;
