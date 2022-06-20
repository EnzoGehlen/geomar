const Users = require('../services/users');
const AbstractController = require('./abstract/abstract');

module.exports = class UsersController extends AbstractController {
  constructor() {
      super(Users);
  }

  addCart(req, res) {
    const { id } = req.params;
    const data = {
        data: {},
    };
    Users.addCart(id, req.body, (resp) => {
        if (resp.id) data.data.id = resp.id;
        data.messages = resp.messages;
        data.data.type = resp.type;
        data.data.item = resp.item;
        res.json(data).status(resp.statusCode).end();
    });
}

buy(req, res) {
  const { id } = req.params;
  const data = {
    data: {},
  };
  Users.buy(id, (resp) => {
      if (resp.id) data.data.id = resp.id;
      data.messages = resp.messages;
      data.data.type = resp.type;
      data.data.item = resp.item;
      res.json(data).status(resp.statusCode).end();
  }); 
}

changeGame(req, res) {
  

removeFromCart(req, res) {
  const { id } = req.params;
  const data = {
      data: {},
  };
  Users.removeFromCart(id, req.body, (resp) => {
      if (resp.id) data.data.id = resp.id;
      data.messages = resp.messages;
      data.data.type = resp.type;
      res.json(data).status(resp.statusCode).end();
  });
}
};
