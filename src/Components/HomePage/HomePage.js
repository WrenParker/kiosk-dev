import React from 'react'
import ReactDOM from 'react-dom'
import NavButtons from "./NavButtons";
import '../../css/App.css'
import '../../css/HomePage.css'
import LogoAndText from "./LogoAndText";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render () {
        return <div className="wrapper">
                    <div className="grid-container">
                        <div className="Logo-Wrapper">
                            <LogoAndText/>
                        </div>
                        <div className="NavButton-Wrapper">
                            <NavButtons/>
                        </div>
                    </div>
                </div>
    }
}

ReactDOM.render(
    <HomePage/>,
    document.getElementById('root')
);

export default HomePage;