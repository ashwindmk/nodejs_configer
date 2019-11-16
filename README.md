
# Configer

Node JS library to easily set application environment and use configuration constants.

[![npm version](https://badge.fury.io/js/%40ashwindmk%2Fconfiger.svg)](https://badge.fury.io/js/%40ashwindmk%2Fconfiger)


### Install

```shell
npm i @ashwindmk/configer
```


### Update

Check if the module version is out-dated:

```shell
npm outdated
```

If this module is listed and its current version and latest version mismatches, then update it:

```shell
npm i @ashwindmk/configer@latest
```


### Create Config JSON File

Sample `config.json`

```JSON
{
    "development": {
        "mysql": {
            "host": "http://localhost:5000/mydb",
            "port": 3306,
            "user": "local",
            "password": "pass1234"
        }
    },
    "staging": {
        "mysql": {
            "host": "https://staging.mydb.com:3000/mydb",
            "port": 3306,
            "user": "admin",
            "password": "staging1234"
        }
    },
    "production": {
        "mysql": {
            "host": "https://prod.mydb.com:3000/mydb",
            "port": 3306,
            "user": "admin",
            "password": "secret1234"
        }
    }
}
```
Here **development** and **production** are the two different environments.


### Set the config JSON File

Make sure you set the absolute path to the config JSON file.

```javascript
const configer = require('@ashwindmk/configer');
const path = require('path');

const absPath = path.resolve('./config.json');
configer.setFile(absPath);
```


### Set the Environment

```javascript
configer.setEnv('development');
```

##### For setting environment in Node JS Applications:

`package.json`
```javascript
{
    ...
    "scripts": {
        "start": "node index.js production",
        "start-stag": "node index.js staging",
        "start-dev": "nodemon index.js development",
        ...
    }
}
```

`index.js`
```javascript
const configer = require('@ashwindmk/configer');

const env = process.argv[2];
configer.setEnv(env);
```


### Usage

```javascript
let dbHost = configer.get('mysql', 'host');
let dbPort = configer.get('mysql', 'port');
```
