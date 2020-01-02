import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../css/App.css';
import HomePage from "../Components/HomePage/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function HomePage() {
  return (
  <Router>
    <div>
        <HomePage/>
    </div>
    <Switch>
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route path="/HomePage">
        <HomePage />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
