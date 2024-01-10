'use strict';

const { default: mongoose } = require('mongoose');
const os = require('os');
const process = require('process');

// * check for number of connection
const countConnection = () => {
    const numConnected = mongoose.connections.length;
    console.log(`number of connections: ${numConnected}`);
};

// * check for overload
// * check very 5000 seconds

const _SECONDS = 5000;
const checkOverload = () => {
    setInterval(() => {
        const numConnected = mongoose.connections.length;
        const numCore = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;

        // * Exmaple maxium number of connections base on number of cores
        const hypothetical_core = 5;
        const maxiumConnection = numConnected * hypothetical_core;

        // * show the number of connections
        console.log(`Active connections: ${numConnected}`);

        // * show memory usage
        console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);

        // ! Alert when connections overloaded
        if (numConnected > maxiumConnection) {
            console.log(`Connection overloaded detected: ${maxiumConnection}`);
        }
    }, _SECONDS);
};

module.exports = { countConnection, checkOverload };
