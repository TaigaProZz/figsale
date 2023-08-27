const productService = require('../services/product.service');
const Controller = require('./controller');

class ProductController extends Controller
{
  constructor (service) {
    super();
    this.service = service;
  }

  getAll (request, response) {
    this.service.getAll().then(result => {
      this.setResponse(result, response);
    }).catch(error => {
      console.log(error);
      this.setError(error, response);
    });
  }

  getById (request, response) {
    this.service.getById(request.params.id).then(result => {
      this.setResponse(result, response);
    }).catch(error => {
      console.log(error);
      this.setError(error, response);
    });
  }
}

module.exports = new ProductController(productService);