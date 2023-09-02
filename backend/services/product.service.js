require('dotenv').config();
const util = require('util');
const { v4: uuidv4 } = require('uuid');
const AWS = require("aws-sdk");
const connection = require('../database');

const s3 = new AWS.S3({
  endpoint: process.env.REACT_APP_SCW_ENDPOINT,
  accessKeyId: process.env.SCW_ACCESS_KEY,
  secretAccessKey: process.env.SCW_SECRET_KEY,
  s3BucketEndpoint: true,
});

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

  async postProduct (product, images) {
    const result = await this.query('INSERT INTO products SET ?', [product]);
    const productId = result.insertId
    const imageResult = images.map(async (image) => {
      const uuid = uuidv4();
      await this.uploadFile(image, `${uuid}`+'.jpg', 'images');
      return uuid + '.jpg';
    });
    const uploadedImages = await Promise.all(imageResult);
    const imageJsonValues = JSON.stringify(uploadedImages);

    await this.query('INSERT INTO products_images (product_id, images) VALUES (?, ?)', [productId, imageJsonValues]);
    return result; 
  }

  uploadFile = async (pFile, pFilename, pFolder) => { 
    const fileContent = Buffer.from(pFile.buffer, ' ');
    await s3.putObject({
      ACL: 'public-read',
      Body: fileContent,
      Bucket: `figsale/${pFolder}`,
      Key: pFilename,
      ContentType: "image/jpeg"
    }).promise();
  }
}

module.exports = new ProductService();