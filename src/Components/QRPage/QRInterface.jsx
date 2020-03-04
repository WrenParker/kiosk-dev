import React from 'react'
import ReactDOM from "react-dom";
import '../../css/QR.css';

class QRInterface extends React.Component {
  contructor(props) {
    

  }

  render () {
    return (
      <div className="QR-Container">
      </div>
    )
  }
}

ReactDOM.render(
    <QRInterface />,
    document.getElementById('root')
);

export default QRInterface;
