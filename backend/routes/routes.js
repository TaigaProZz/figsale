module.exports = (app) => {
  app.use('/product', require('./product.route'));
  app.use('/images', require('./product.image.route'));
}