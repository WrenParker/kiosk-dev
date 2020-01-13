import React from 'react'
import PropTypes from 'prop-types'

class Schedule extends React.Component {

  constructor(props) {
    super(props)

    this.state: {

    }
    
  }

  componentDidMount() {
    this._isMounted = true;
    this.timerID = setInterval(
        () => this.tick(), 600000
    );
  }

  componentWillUnmount() {
    this._isMounted = false;
    clearInterval(this.timerID);
  }

  tick () {
    this.setState({

    })
  }
  render () {
    <div>
    </div>
  }
}

ReactDOM.render(
    <WeatherInfo/>,
    document.getElementById('root')
);

export default Schedule;