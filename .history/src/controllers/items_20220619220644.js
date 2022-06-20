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
        if (resp.id) data.data.id = resp.id;
        data.messages = resp.messages;
        data.data.type = resp.type;
        data.data.item = resp.item;
        res.json(data).status(resp.statusCode).end();
    });
  }
};
