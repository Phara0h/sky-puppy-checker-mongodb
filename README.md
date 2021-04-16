# sky-puppy-checker-mongodb
A Sky Puppy checker for mongodb

## Install

```bash
npm install -g sky-puppy-checker-mongodb
```
## Test

```bash
npm test
```

## Sample Config


```json
{
  checkers: {
    "sky-puppy-checker-mongodb": {
      "url": "mongodb://llama:drama@localhost:27017/?replicaSet=rs",
      "mongo_settings": {
        "useUnifiedTopology": true
      }
    }
  }
}

```

## Changelog

All notable changes to this project will be documented in this file. Dates are displayed in UTC.

#### [v1.1.1](https://github.com/Phara0h/sky-puppy-checker-mongodb/compare/v1.1.0...v1.1.1)

#### v1.1.0

> 2 November 2020

- Init comit of mongodb checker [`43c4d82`](https://github.com/Phara0h/sky-puppy-checker-mongodb/commit/43c4d823c2afc083259c0cda60e75c926b40693b)
- Initial commit [`ae1b766`](https://github.com/Phara0h/sky-puppy-checker-mongodb/commit/ae1b766ffe35ed99434449546af7c2ddaeae35b9)

