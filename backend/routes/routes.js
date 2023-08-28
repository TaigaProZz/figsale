module.exports = (app) => {
  app.use('/product', require('./product.route'));
  app.use('/images', require('./product.image.route'));
  app.use('/feedback', require('./feedback.route'));
  app.use('/sort', require('./sort.route'));
}