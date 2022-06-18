const UsersModel = require('../models/users');
const Response = require('../helpers/ResponseHelper').users;

module.exports = class Users {
    static create(body, callback) {
      if (!body.admin) {
        body.admin = false;
      }
      UsersModel.create({
        ...body
      }).then(() => callback(Response.create('success', 'Criado com sucesso!')));
    }

    static get(params, callback) {
        let query = {};
        UsersModel.find().populate(['cart', 'library']).then((resp) => {
          let ret = [];
          resp.forEach((item) => {
            ret.push({
              ...item._doc,
              actions: `<a class="button_trigger" onclick="form('${item._id}')" style='cursor:pointer' >Editar</a> | <a  style='cursor:pointer' onclick="del('${item._id}')">Apagar</a>`,
            });
          });
            callback(ret);
        });
    }

    static findOne(id, callback) {
      UsersModel.findOne({ _id: id }).populate(['cart', 'library']).then((resp) => {
          callback(resp);
      });
    }

    static update(id, body, callback) {
      if (!body.admin) {
        body.admin = false;
      }
      UsersModel.updateOne({ _id: id }, { ...body }, (doc) => {
            callback(Response.update('success', 'Atualizado com sucesso!'));
        });
    }

    static delete(id, callback) {
      UsersModel.deleteOne({ _id: id }, () => {
            if (callback) callback(Response.delete('success', 'Apagado com sucesso!', id));
        });
    }
};
