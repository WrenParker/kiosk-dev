import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './css/App.css';
import WelcomePage from "./pages/WelcomePage";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./pages/HomePage";



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
export default App;
