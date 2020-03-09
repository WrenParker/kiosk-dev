import React from 'react'
import ReactDOM from "react-dom";
import '../../css/QR.css';
import {
  HashRouter as Router,
  Link
} from "react-router-dom";
import {Button} from "react-bootstrap";

class QRInterface extends React.Component {
  contructor(props) {


  }

  render () {
    return (
      <Router>
        <div className="QR-Container">
          <Link className="Direct-Download">
            <Button className="Button">
              QR Link
            </Button>
          </Link>
          <Link className="QR-Download">
            <Button className="Button">
              Download through App
            </Button>
          </Link>
          <div className="QR-Image">
          </div>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
    <QRInterface />,
    document.getElementById('root')
);

export default QRInterface;
