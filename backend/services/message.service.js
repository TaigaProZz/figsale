const util = require('util');
const connection = require('../database');

class MessageService {
  
  constructor() {
    this.query = util.promisify(connection.query).bind(connection);
  }  
  
  send (message) {
    return this.query('INSERT INTO messages SET ?', [message]);
  }
  
}

module.exports = new MessageService();