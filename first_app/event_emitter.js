const EventEmitter = require('events');
// const emitter = new EventEmitter();

const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

// // Raise an event
// emitter.emit('messageLoggerged');


logger.log('message');
