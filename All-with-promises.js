'use strict'

const async = require('./async-function-promise.js');

/*
 * Parallel, Promise.all() takes an array of promises as input, and then it gives you
 * another promise that only resolves when every one of those other promises has resolved
 *
 * It will only call one of either .then or .catch
 */
Promise.all([
    async.unreliableIObound("Onyx"),
    async.unreliableIObound("Chestnut"),
    async.unreliableIObound("Plum"),
    async.unreliableIObound("Pineapple"),
    async.unreliableIObound("Safety Orange")
]).then((result) => {
    // Only gets called if all succeed
    if (Array.isArray(result)) {
        for (let i = 0; i < result.length; i++) {
            async.successHandler(result[i]);
        }
    }
}).catch((name) => {
    // Call the first error
    async.failureHandler(name);
});
