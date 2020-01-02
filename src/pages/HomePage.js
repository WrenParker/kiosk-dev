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




function Home() {
  return (
    <div>
        <HomePage/>
    </div>
  );
}

export default Home;
