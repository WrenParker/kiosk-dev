
const ImageToBase64 = require('./ImageToBase64');

let result = ImageToBase64.encode('./test.jpg');
console.log(result);
console.log(ImageToBase64.splitBase64(result));