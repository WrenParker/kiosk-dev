import React from 'react'
import ReactDOM from "react-dom";
import '../../css/Schedule.css';

class Schedule extends React.Component {

  render () {
    return (
      <div className="Calendar">
        <webview src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=d2xwMDAwM0BtaXgud3Z1LmVkdQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=bWl4Lnd2dS5lZHVfY2xhc3Nyb29tODViZjAzMmFAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=bWl4Lnd2dS5lZHVfY2xhc3Nyb29tODA2ZTRkNTZAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%23202124&amp;color=%233e2723&amp;color=%230B8043&amp;showTitle=0&amp;showDate=1&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=1&amp;mode=WEEK" className="Calendar-Style" frameborder="0" scrolling="no"></webview>
      </div>
    )
  }
}

ReactDOM.render(
    <Schedule />,
    document.getElementById('root')
);

export default Schedule;
