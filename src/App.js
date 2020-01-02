import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './css/App.css';
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
  <Router>
    <div>
        <WelcomePage />
    </div>
  </Router>
  );
}

export default App;
