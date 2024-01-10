'use strict';

const { mongo, default: mongoose } = require('mongoose');
const { countConnection } = require('../helpers/check.connect');

class Database {
    constructor() {
        this.connect();
    }

    // * database connection
    // ? check if the conncetion for development or production
    // ? check if what type of database
    // TODO : ds

    connect(type = 'mongo') {
        // * development environment
        if (1 == 1) {
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true });
        }

        // * connect to Mongo
        const url = process.env.MONGO_PATH_DEV;
        mongoose
            .connect(url, {
                maxPoolSize: 50,
            })
            .then((_) => console.log('connected to Mongo for developer eviroment', countConnection()))
            .catch((err) => console.log('err'));
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const instance_MongoDB = Database.getInstance();

module.exports = instance_MongoDB;
