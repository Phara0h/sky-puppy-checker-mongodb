class Checker {
  constructor(config, service, settings) {
    this.config = config;
    this.service = service;
    this.settings = settings;

    this.mongo = require('mongodb').MongoClient;
    this.db = null;
  }
  async init() {}

  async check() {
    try {
      this.db = await this.mongo.connect(
        this.settings.url,
        this.settings.mongo_settings
      );
      await this.db.close();
      return {
        code: 200,
        message: 'OK'
      };
    } catch (e) {
      console.log(e);
      return {
        code: 500,
        message: e.message
      };
    }
  }
}

module.exports = function(config, service, settings) {
  return new Checker(config, service, settings);
};
