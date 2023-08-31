const util = require('util');
const connection = require('../database');

class FavoriteService {
  
  constructor() {
    this.query = util.promisify(connection.query).bind(connection);
  }

  create(data) {
    return this.query(`
    INSERT IGNORE INTO favorites (creator_id, product_id, add_date) 
    VALUES (?, ?, ?)`, [data.creator_id, data.product_id, data.add_date]);
  }

  getFavoriteById(id) {
    return this.query(`
      SELECT p.*, i.images
      FROM products AS p 
      JOIN favorites AS f ON p.id = f.product_id 
      JOIN products_images AS i ON p.id = i.product_id
      WHERE f.creator_id = ?`, [id]);
  }

  getSingleFavorite(id, product_id) {
    return this.query(`
      SELECT EXISTS (
        SELECT 1
        FROM favorites
        WHERE creator_id = ? AND product_id = ?
      ) AS is_favorite`, [id, product_id])
      .then(result => result[0].is_favorite === 1);
  }
  
  delete(creator_id, product_id) {
    return this.query('DELETE FROM favorites WHERE creator_id = ? AND product_id = ?', [creator_id, product_id]);
  }
}

module.exports = new FavoriteService();