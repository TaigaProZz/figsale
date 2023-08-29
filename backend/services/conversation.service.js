const util = require('util');
const connection = require('../database');

class ConversationService {
  
  constructor() {
    this.query = util.promisify(connection.query).bind(connection);
  }

  getAllById(email) {
    return this.query('SELECT * FROM conversations WHERE email_creator = ? ORDER BY last_activity', [email]);
  }   
}

module.exports = new ConversationService();