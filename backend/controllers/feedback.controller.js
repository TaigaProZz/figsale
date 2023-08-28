const feedbackService = require('../services/feedback.service');
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
}

module.exports = new ProductController(feedbackService);