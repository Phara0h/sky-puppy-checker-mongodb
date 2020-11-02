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

#### 1.1.0

