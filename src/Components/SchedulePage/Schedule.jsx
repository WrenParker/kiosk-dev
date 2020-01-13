import React from 'react'
import ReactDOM from "react-dom";
import * as apiKeys from "../apiKeys.json"
import Iframe from 'react-iframe';

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
        () => this.tick(), 2000
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
        <Iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23616161&amp;ctz=America%2FNew_York&amp;src=d2xwMDAwM0BtaXgud3Z1LmVkdQ&amp;color=%2322AA99&amp;showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=WEEK" style={{border:"solid 1px #777"}} width="100%" height="100%" frameborder="0" scrolling="no"></Iframe>
      </div>
    )
  }
}

ReactDOM.render(
    <Schedule src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=d2xwMDAwM0BtaXgud3Z1LmVkdQ&amp;color=%2322AA99&amp;showNav=0&amp;showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;mode=WEEK&amp;showCalendars=0&amp;showDate=0" style={{"borderWidth": "0"}} width="800" height="600" frameBorder="0" scrolling="no"/>,
    document.getElementById('root')
);

export default Schedule;
