import React from 'react'
import ReactDOM from "react-dom";
import * as apiKeys from "../apiKeys.json"

class Schedule extends React.Component {

  constructor(props) {
    super(props)
    this.keys = apiKeys.default.keys.calendar;
    this.clientId = this.keys.clientId;
    this.secret = this.keys.secret;
    this.apiKey = this.keys.key;
    this.state = {
      calendarData: null,
    };

  }

  componentDidMount() {
    this._isMounted = true;
    this.timerID = setInterval(
        () => this.tick(), 20000
    );
  }

  componentWillUnmount() {
    this._isMounted = false;
    clearInterval(this.timerID);
  }

  tick () {
    console.log(this);
  }

  getCalendarData() {
    const calendarURL =
    ``;

    fetch(calendarURL)
    .then(res=>res.json())
    .then(data=> {
      if(this._isMounted) {
        this.setState({
          calendarData: data
        });
      }
    })
  }

  render () {
    return (
      <div>
      </div>
    )
  }
}

ReactDOM.render(
    <Schedule />,
    document.getElementById('root')
);

export default Schedule;