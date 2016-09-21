'use strict'

module.exports = {};

/*
 * This functions simulates an IO bound operation such as reading a file or writing to a database
 * it is slow and any errors must be handled. The event loop cannot wait for this function so
 * it must be called asynchronously.
 *
 * The function takes between 0-2 seconds before returning and calling the function success with a 75% probability
 * or error with a 25% probability.
 *
 * The str argument servers as a simple identifier
 */
module.exports.unreliableIObound = function UnreliableIObound(name, successHandler, errorHandler) {

    // Log that the function is called
    console.log("Called: " + name);

    // Create a random number of microsecond to wait - up to 2 seconds
    var wait = Math.round(Math.random() * 1000) * 2;

    setTimeout(function() {
        // Generate a random number between 0 and 1
        var rnd = Math.random();

        // Fail on average 1/3
        if (rnd > 0.33) {
            successHandler({ name: name, wait: wait });
        } else {
            errorHandler(name);
        }
    }, wait);

};

module.exports.successHandler = function(result) {
    console.log(`SUCCESS!: completed ${result.name} in ${result.wait}ms`);
};

module.exports.failureHandler = function(name) {
    console.log(`ERROR!: ${name} has failed`);
};
