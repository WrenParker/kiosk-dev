
const ImageToBase64 = require('./ImageToBase64');
const GenQR = require('./GenerateQR');

let result = ImageToBase64.encode('./test.jpg');
let list = ImageToBase64.splitBase64(result);
GenQR.encode(list, 0);
