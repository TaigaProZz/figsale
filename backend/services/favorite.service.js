const util = require('util');
const connection = require('../database');

class FavoriteService {
  
  constructor() {
    this.query = util.promisify(connection.query).bind(connection);
  }

  create(data) {
    return this.query('INSERT INTO favorites SET ?', [data]);
  }

  getFavoriteById(id) {
    return this.query(`
      SELECT p.*, i.images
      FROM products AS p 
      JOIN favorites AS f ON p.id = f.product_id 
      JOIN products_images AS i ON p.id = i.product_id
      WHERE f.creator_id = ?`, [id]);
  }  
  
  delete(id) {
    return this.query('DELETE FROM favorites WHERE product_id = ?', [id]);
  }
}

module.exports = new FavoriteService();