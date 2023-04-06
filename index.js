const msg = (name) => {
    console.log(`hello ${name}`);
}

msg('WORLD');

const { log, error } = require('console');
// //to use this code, please install moment prior : npm install moment
// //to unsinstall moment library : npm uninstall moment
// const moment = require('moment');
// const date = moment().format('DD MMMM YYYY');
// console.log(date);

// //event
const {EventEmitter} = require('events');
const myEventEminnter = new EventEmitter();

// //this function works when coffe-order called
const makeCoffee = ({name}) => {
    console.log(`Kopi ${name} telah dibuat`);
}

const makeBill = ({price}) => {
    console.log(`Total harga :  Rp ${price}`);
}

// //to register makecoffee function as listener event coffee-order
myEventEminnter.on('coffee-order', makeCoffee);
myEventEminnter.on('coffee-order', makeBill);

// //trigger event coffee-order
myEventEminnter.emit('coffee-order', {name:'Luwak', price:20000});

// //or u can use this function to handler event
const onCoffeeOrderedListener = ({name, price}) => {
    makeCoffee(name);
    makeBill(price);
}

myEventEminnter.on('coffee-order', onCoffeeOrderedListener);
myEventEminnter.emit('coffee-order', { name:'Tubruk', price:10000});

// //filesystem
// //synchronous
const fsr = require('fs');
const fileData = fsr.readFileSync('todo.txt', 'UTF-8');
console.log(fileData);

// //asynchronous
const fst = require('fs');
const fileReadCallback = (error, data) => {
    if(error){
        console.log('gagal membaca berkas');
        return;
    }
    console.log(data);
    console.log('berhasil membaca berkas');
};
fst.readFile('todos.txt', 'UTF-8', fileReadCallback);

// //readable stream
const fs = require('fs');
const readableStream = fs.createReadStream('./todo.txt',{
    highWaterMark: 4
});

readableStream.on('readable', () => {
    try{
        process.stdout.write(`[${readableStream.read()}]`);
    }
    catch(error){
        // console.log('error');
    }
});

readableStream.on('end', () => {
    console.log('\ndone');
});

// //writeable stream
const fsx = require('fs');
const writeableStream = fsx.createWriteStream('output.txt');

writeableStream.write('first row text\n');
writeableStream.write('second row text\n');
writeableStream.end('end of writeable stream');