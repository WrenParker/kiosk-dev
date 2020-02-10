import React from 'react'
import ReactDOM from "react-dom";
import '../../css/Schedule.css';

class Schedule extends React.Component {

  render () {
    return (
      <div className="Calendar">
        <webview src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;showTitle=0&amp;showNav=0&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=1&amp;mode=WEEK&amp;src=d2xwMDAwM0BtaXgud3Z1LmVkdQ&amp;color=%23039BE5" className="Calendar-Style" frameborder="0" scrolling="no"></webview>
      </div>
    )
  }
}

ReactDOM.render(
    <Schedule />,
    document.getElementById('root')
);

export default Schedule;
