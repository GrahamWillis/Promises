'use strict'

const async = require('./async-function.js');

/*
 * Nesting successive calls within the success handler
 */
async.unreliableIObound('Almond', (result) => {
    async.successHandler(result);
    async.unreliableIObound('Ruby', (result) => {
        async.successHandler(result);
        async.unreliableIObound('Aquamarine', (result) => {
            async.successHandler(result);
            async.unreliableIObound('Azure', (result) => {
                async.successHandler(result);
            }, async.failureHandler);
        }, async.failureHandler);
    }, async.failureHandler);
}, async.failureHandler);

