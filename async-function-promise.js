'use strict'

module.exports = {};

/*
 * The following function returns a result asynchronously, via a Promise
 * Promises are always asynchronous
 */
module.exports.unreliableIObound = function UnreliableIObound(name, successHandler, errorHandler) {

    // Log that the function is called
    console.log("Called: " + name);

    return new Promise(
        function (resolve, reject) {
            // Create a random number of microsecond to wait - up to 2 seconds
            var wait = Math.round(Math.random() * 1000) * 2;

            setTimeout(function() {
                // Generate a random number between 0 and 1
                var rnd = Math.random();

                // Fail on average 1/3
                if (rnd > .33) {
                    resolve({ name: name, wait: wait });
                } else {
                    reject(name);
                }
            }, wait);

        });
};

module.exports.successHandler = function(result) {
    console.log(`SUCCESS: has completed ${result.name} in ${result.wait}ms`);
};

module.exports.failureHandler = function(name) {
    console.log(`ERROR: ${name} has failed`);
};
