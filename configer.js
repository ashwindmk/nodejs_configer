'use strict';

let error;
let config;
let env;

module.exports = {
    setFile: (filePath) => {
        try {
            config = require(filePath);
        } catch (err) {
            error = err.code;
            console.error('Error in setting config file: ' + error);
        }
    },

    setEnv: (environment) => {
        env = environment;
    },

    getEnv: () => {
        return env;
    },

    get: (...keys) => {
        let obj;

        if (!config) {
            if (error) {
                console.error('Config file error: ' + error);
            } else {
                console.error('Config file path is not set!');
            }
            return obj;
        }

        if (!env) {
            console.error('Environment is not set!');
            return obj;
        }

        obj = config[env];
        for (let i = 0; i < keys.length; i++) {
            if (obj) {
                obj = obj[keys[i]];
            } else {
                break;
            }
        }

        return obj;
    }
}
