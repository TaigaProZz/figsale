const util = require('util');
const connection = require('../database');

class MessageService {
  
  constructor() {
    this.query = util.promisify(connection.query).bind(connection);
  }  

  getAllById (id) {
    return this.query('SELECT * FROM messages WHERE conversation_id = ?', [id]);
  }
  
  send (message) {
    return this.query('INSERT INTO messages SET ?', [message]);
  }
  
}

module.exports = new MessageService();