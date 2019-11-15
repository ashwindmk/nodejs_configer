'use strict';

let config;

let env;

module.exports = {
    setFile: (filePath) => {
        try {
            config = require(filePath);
            console.log(config);
        } catch (err) {
            console.error(err);
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
        if (env) {
            obj = config[env];
            for (let i = 0; i < keys.length; i++) {
                if (obj) {
                    obj = obj[keys[i]];
                } else {
                    break;
                }
            }
        } else {
            console.error('Environment is not set!');
        }
        return obj;
    }
}
