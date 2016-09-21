'use strict'

const async = require('./async-function-promise.js');

/*
 * Nesting successive calls within the success handler
 * Whenever you create a promise in a then, return it it is waited for outside
 *
 * Note the difference between passing and returning a function: (func) and the result of calling
 * the function: (func())
 * 
 */
async.unreliableIObound("Crimson")
    .then((result) => {
        async.successHandler(result);
        return async.unreliableIObound("Pink");
    })
    .then((result) => {
        async.successHandler(result);
        return async.unreliableIObound("Yellow");
    })
    .then((result) => {
        async.successHandler(result);
        return async.unreliableIObound("Asparagus");
    })
    .then((result) => {
        async.successHandler(result);
        return async.unreliableIObound("Raspberry");
    })
    .then((result) => {
        async.successHandler(result);
        return async.unreliableIObound("Puce");
    })
    .catch(async.failureHandler);


