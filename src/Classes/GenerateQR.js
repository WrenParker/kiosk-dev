const QR = require('qrcode')

class GenerateQR {
    static encode(list, index) {
        let imageString = list[index];
        QR.toFile('./testQR.jpg', imageString);
    }
}

module.exports = GenerateQR;