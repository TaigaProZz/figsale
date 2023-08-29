const util = require('util');
const connection = require('../database');

class FavoriteService {
  
  constructor() {
    this.query = util.promisify(connection.query).bind(connection);
  }

  getFavoriteById(id) {
    return this.query('SELECT * FROM favorites WHERE creator_id = ? ORDER BY add_date', [id]);
  }   
}

module.exports = new FavoriteService();