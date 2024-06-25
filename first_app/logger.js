const EventEmitter = require('events');
// const emitter = new EventEmitter();


var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message){
        // send an HTTP request
        console.log(message);
    
        // Raise an event
        this.emit('messageLogged', { id: 1, url: 'http://'});
    
    }
}

module.exports = Logger;



// module.exports.log = log; // object
// module.exports.endPoint = url;

