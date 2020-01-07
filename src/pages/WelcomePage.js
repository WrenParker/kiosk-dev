import React from 'react'
import ReactDOM from 'react-dom'
import '../css/App.css'
import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LogoAndText from "../Components/Common/LogoAndText";
import NavButtons from "../Components/WelcomePage/NavButtons"


class WelcomePage extends React.Component {
    constructor(props) {
        super(props);

    }
    render () {
        return(
        <HashRouter>
          <div>
            <div className="wrapper">
                        <div className="grid-container">
                            <div className="Logo-Wrapper">
                                <LogoAndText/>
                            </div>
                            <div className="NavButton-Wrapper">
                                <NavButtons/>
                            </div>
                        </div>
                    </div>
                </div>
        </HashRouter>
    )}
}

ReactDOM.render(
    <WelcomePage/>,
    document.getElementById('root')
);

export default WelcomePage;
