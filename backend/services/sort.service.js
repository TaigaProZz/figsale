const util = require('util');
const connection = require('../database');

class SortService {
  
  constructor() {
    this.query = util.promisify(connection.query).bind(connection);
  }

  getLicences() {
    return this.query('SELECT * FROM licences');
  }   
}

module.exports = new SortService();