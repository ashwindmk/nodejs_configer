
# Configer

Node JS library to easily set application environment and use configuration constants.

[![npm version](https://badge.fury.io/js/%40ashwindmk%2Fconfiger.svg)](https://badge.fury.io/js/%40ashwindmk%2Fconfiger)


### Install

```shell
npm i @ashwindmk/configer
```

### Set Config JSON File

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


### Set the Environment

```javascript
const configer = require('@ashwindmk/configer');

configer.setFile('./config.json');
configer.setEnv('development');
```


### Usage

```javascript
let dbHost = configer.get('mysql', 'host');
let dbPort = configer.get('mysql', 'port');
```
