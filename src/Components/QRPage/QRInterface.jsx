import React from 'react'
import ReactDOM from "react-dom";
import '../../css/QR.css';
import {
  HashRouter as Router,
  Link
} from "react-router-dom";
import {Button} from "react-bootstrap";
const QR = require('qrcode')

class QRInterface extends React.Component {
  constructor(props) {
    super(props);

    //this.data = props.data;
  }

  // flashQR() {
  //   const stringList = [];
  //   let qrString = this.data;
  //   let size = 25;
  //   let length = Math.ceil((qrString.length)/size);
  //   console.log(length);
  //   for (let i=0; i<length; i++) {
  //       if(i===0) {
  //           stringList.push(qrString.slice(0,size));
  //       }
  //       else if(i === length) {
  //           stringList.push(qrString.slice(size*i,this.data.length));
  //       }
  //       else {
  //           stringList.push(qrString.slice(size*i,(size*(i+1))-1));
  //       }
  //   }
  //   console.log(stringList);
  // }

  render () {
    return (
      <Router>
        <div className="QR-Container">
          <div className="Direct-Download">
            <Button className="Button">
              QR Link
            </Button>
          </div>
          <div className="QR-Download">
            <Button className="Button">
              Download through App
            </Button>
          </div>
          <div id="QR-Img" className="QR-Image">
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
