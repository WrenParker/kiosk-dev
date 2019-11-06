import React from 'react'
import ReactDOM from 'react-dom'


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 100
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    produceTimeString() {
        let hour = this.state.time.getHours();
        let minutes = this.state.time.getMinutes();
        let seconds = this.state.time.getSeconds();



        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if(hour > 12) {
            hour = hour-12;
        }

        return hour + ":" + minutes + ":" + seconds;
    }

    render () {
        return <div className="Logo-Time">
            {this.produceTimeString()}
        </div>
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);

export default Clock;