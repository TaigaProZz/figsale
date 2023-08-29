const util = require('util');
const connection = require('../database');

class ConversationService {
  
  constructor() {
    this.query = util.promisify(connection.query).bind(connection);
  }

  getAllById(email) {
    return this.query('SELECT * FROM conversations WHERE creator_id = ? ORDER BY last_activity', [email]);
  }   

  create(conversation) {
    return this.query('INSERT INTO conversations SET ?', [conversation]);
  }
}

module.exports = new ConversationService();