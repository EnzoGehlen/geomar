const UsersModel = require('../models/users');
const Response = require('../helpers/ResponseHelper').users;

module.exports = class Users {
    static create(body, callback) {
      UsersModel.create({
        ...body
      }).then(() => callback(Response.create('success', 'Criado com sucesso!')));
    }

    static get(params, callback) {
        let query = {};
        UsersModel.find().populate(['cart', 'library']).then((resp) => {
            callback(resp);
        });
    }

    static findOne(id, callback) {
      UsersModel.findOne({ _id: id }).populate(['cart', 'library']).then((resp) => {
          callback(resp);
      });
    }

    static update(id, body, callback) {
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
