'use strict'

const async = require('./async-function.js');

async.unreliableIObound('Blue', async.successHandler, async.failureHandler);
async.unreliableIObound('Red', async.successHandler, async.failureHandler);
async.unreliableIObound('Green', async.successHandler, async.failureHandler);
async.unreliableIObound('Salmon', async.successHandler, async.failureHandler);
async.unreliableIObound('Avocado', async.successHandler, async.failureHandler);
async.unreliableIObound('Lime', async.successHandler, async.failureHandler);
