
const {EventEmitter} = require('events');
const myEventEmitter = new EventEmitter();

const birthdayEventListener = (names) => {
    console.log(`Happy Birthday ${names}`);
}

myEventEmitter.on('birthday-greeting', birthdayEventListener);
myEventEmitter.emit('birthday-greeting', {names : 'lulu'});