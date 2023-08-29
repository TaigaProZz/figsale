const util = require('util');
const connection = require('../database');

class MessageService {
  
  constructor() {
    this.query = util.promisify(connection.query).bind(connection);
  }

  // getAllById(conversation_id) {
  //   return this.query('SELECT * FROM messages WHERE conversation_id = ? ORDER BY send_date', [conversation_id]);
  // }   
}

module.exports = new MessageService();