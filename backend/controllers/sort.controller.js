const sortService = require('../services/sort.service');
const Controller = require('./controller');

class SortController extends Controller
{
  constructor (service) {
    super();
    this.service = service;
  }

  getLicences (request, response) {
    this.service.getLicences().then(result => {
      this.setResponse(result, response);
    }).catch(error => {
      console.log(error);
      this.setError(error, response);
    });
  }
}

module.exports = new SortController(sortService);