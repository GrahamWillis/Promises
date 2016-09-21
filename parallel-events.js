'use strict'

const util = require('util');
const events = require('events');
const async = require('./async-function.js');
const sleep = require("sleep");

// Canonical way of associating a function with event-emitter
function UnreliableIObound() {
    events.EventEmitter.call(this);
}

// Copies methods from one prototype to another
util.inherits(UnreliableIObound, events.EventEmitter);

var unreliableIObound = new UnreliableIObound();

unreliableIObound.on('start', function(name) {
    // Log that the function is called
    console.log("Called: " + name);

    // Create a random number of microsecond to wait - up to 2 seconds
    var wait = Math.round(Math.random() * 1000) * 2;
    var that = this;

    setTimeout(function() {
        // Generate a random number between 0 and 1
        var rnd = Math.random();

        // Fail on average 1/3
        if (rnd > .33) {
            that.emit('success', { name: name, wait: wait });
        } else {
            that.emit('failure', name);
        }
    }, wait);

});

unreliableIObound.on('success', async.successHandler);
unreliableIObound.on('failure', async.failureHandler);

unreliableIObound.emit('start', 'Fawn');
unreliableIObound.emit('start', 'Emerald');
unreliableIObound.emit('start', 'Flax');
unreliableIObound.emit('start', 'Fuchsia');
unreliableIObound.emit('start', 'Wine');

// Note: in a real-world scenario should implement an error event
// Which causes the program to exit if raised nut not bound



