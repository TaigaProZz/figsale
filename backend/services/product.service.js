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

  getNewProducts() {
    return this.query('SELECT * FROM products WHERE availability = 1 ORDER BY id LIMIT 10');
  }

  getPromoProducts() {
    return this.query('SELECT * FROM products WHERE availability = 2 ORDER BY id LIMIT 10');
  }

  getPreorderProducts() {
    return this.query('SELECT * FROM products WHERE availability = 3 ORDER BY id LIMIT 10');
  }

}

module.exports = new ProductService();