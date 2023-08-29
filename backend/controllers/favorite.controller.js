const favoriteService = require('../services/favorite.service');
const Controller = require('./controller');

class FavoriteController extends Controller
{
  constructor (service) {
    super();
    this.service = service;
  }

  getFavoriteById (request, response) {
    this.service.getFavoriteById(request.params.id).then(result => {
      this.setResponse(result, response);
    }).catch(error => {
      console.log(error);
      this.setError(error, response);
    });
  }
}

module.exports = new FavoriteController(favoriteService);