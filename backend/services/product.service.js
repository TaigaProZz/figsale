const util = require('util');
const connection = require('../database');

class ProductService {
  
  constructor() {
    this.query = util.promisify(connection.query).bind(connection);
  }

  getAll() {
    return this.query('SELECT * FROM products');
  }   

  getById(id) {
    return this.query('SELECT * FROM products WHERE id = ?', [id]);
  }
}

module.exports = new ProductService();