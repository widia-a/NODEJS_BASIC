const fs = require('fs');
const readableStream = fs.createReadStream('./stream/input.txt',{
    highWaterMark: 15
});

const writeableStream = fs.createWriteStream('./stream/output.txt');

readableStream.on('readable', () => {
    try{
        writeableStream.write(`[${readableStream.read()}]\n`);
    }
    catch(error){
        console.log('error');
    }
});

readableStream.on('end', () => {
    writeableStream.end();
    console.log('\nsuccess write to file output');
});
