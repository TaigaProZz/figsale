const util = require('util');
const connection = require('../database');

class ProductImageService {
  
  constructor() {
    this.query = util.promisify(connection.query).bind(connection);
  }

  getAll() {
    return this.query('SELECT * FROM products_images');
  }   

  getById(id) {
    return this.query('SELECT * FROM products_images WHERE product_id = ?', [id]);
  }
}

module.exports = new ProductImageService();