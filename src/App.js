import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './css/App.css';
import logo from './img/logo.png';
import Clock from './Components/Clock';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Button from "reactstrap/lib/Button";
import HomePage from "./Components/HomePage/HomePage";



function App() {
  return (
    <div>
        <HomePage/>
    </div>
  );
}

export default App;
