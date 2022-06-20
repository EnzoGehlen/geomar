const Items = require('../services/items');
const AbstractController = require('./abstract/abstract');

module.exports = class ItemsController extends AbstractController {
  constructor() {
      super(Items);
  }

  getItemByPrice(req, res){
    const { id } = req.params;
    const data = {
        data: {},
    };
    Items.getItemByPrice(id, (resp) => {
      dados.data = response;
      res.json(dados).end();
    });
  }
};
