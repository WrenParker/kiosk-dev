let fs = require('fs');
let base64 = require('base-64');

class ImageToBase64 {

    static encode(path) {
        let bufferStream = fs.readFileSync(path)
        return bufferStream.toString('base64');
    }

    static splitBase64 (base64String) {
         const stringList = [];
         let size = 2048; //length of 2kb
         let length = Math.ceil((base64String.length)/size);
         for (let i=0; i<length; i++) {
             console.log(i);
             if(i===0) {
                 stringList.push(base64String.slice(0,size));
             }
             else if(i === length) {
                 stringList.push(base64String.slice(size*i,base64String.length));
             }
             else {
                 stringList.push(base64String.slice(size*i,(size*(i+1))-1));
             }
         }
         return stringList
    }
}

module.exports = ImageToBase64;