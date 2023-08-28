const util = require('util');
const connection = require('../database');

class FeedbackService {
  
  constructor() {
    this.query = util.promisify(connection.query).bind(connection);
  }

  getAll() {
    return this.query('SELECT * FROM feedbacks');
  }   
}

module.exports = new FeedbackService();