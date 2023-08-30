const messageService = require('../services/message.service');
const Controller = require('./controller');

class MessageController extends Controller
{
  constructor (service) {
    super();
    this.service = service;
  }

  getAllById (request, response) {
    this.service.getAllById(request.params.id).then(result => {
      this.setResponse(result, response);
    }).catch(error => {
      console.log(error);
      this.setError(error, response);
    });
  }

  send (request, response) {
    this.service.send(request.body).then(result => {
      this.setResponse(result, response);
    }).catch(error => {
      console.log(error);
      this.setError(error, response);
    });
  }
}

module.exports = new MessageController(messageService);