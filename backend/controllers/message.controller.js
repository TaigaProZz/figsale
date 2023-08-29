const messageService = require('../services/message.service');
const Controller = require('./controller');

class MessageController extends Controller
{
  constructor (service) {
    super();
    this.service = service;
  }

  getAllById (request, response) {
    this.service.getAllById().then(result => {
      this.setResponse(result, response);
    }).catch(error => {
      console.log(error);
      this.setError(error, response);
    });
  }

  // getById (request, response) {
  //   this.service.getById(request.params.id).then(result => {
  //     this.setResponse(result, response);
  //   }).catch(error => {
  //     console.log(error);
  //     this.setError(error, response);
  //   });
  // }
}

module.exports = new MessageController(messageService);