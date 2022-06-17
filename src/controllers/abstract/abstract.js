module.exports = class AbstractController {
  constructor(service) {
      this.service = service;
  }

  get(req, res) {
      const dados = {
          data: {
              page: 1,
          },
      };
      this.service.get(req.query, (response) => {
          dados.data.rows = response;
          res.json(dados).end();
      });
  }

  findOne(req, res) {
      const data = {
          data: {},
      };
      this.service.findOne(req.params.id, (resp) => {
          data.data = resp;
          res.json(data).end();
      });
  }

  create(req, res) {
      const data = {
          data: {},
      };
      this.service.create(req.body, (resp) => {
          if (resp.id) data.data.id = resp.id;
          data.messages = resp.messages;
          data.data.type = resp.type;
          res.json(data).status(resp.statusCode).end();
      });
  }

  delete(req, res) {
      const { id } = req.params;
      const data = {
          data: {},
      };
      this.service.delete(id, (resp) => {
          if (resp.id) data.data.id = resp.id;
          data.messages = resp.messages;
          data.data.type = resp.type;
          res.json(data).status(resp.statusCode).end();
      });
  }

  update(req, res) {
      const { id } = req.params;
      const data = {
          data: {},
      };
      this.service.update(id, req.body, (resp) => {
          if (resp.id) data.data.id = resp.id;
          data.messages = resp.messages;
          data.data.type = resp.type;
          res.json(data).status(resp.statusCode).end();
      });
  }
};
