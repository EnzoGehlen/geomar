const CategoriesModel = require('../models/categories');
const Response = require('../helpers/ResponseHelper').categories;

module.exports = class Categories {
    static create(body, callback) {
      CategoriesModel.create({
        ...body
      }).then(() => callback(Response.create('success', 'Criado com sucesso!')));
    }

    static get(params, callback) {
        let query = {};
        CategoriesModel.find().then((resp) => {
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
      CategoriesModel.findOne({ _id: id }).then((resp) => {
          callback(resp);
      });
    }

    static update(id, body, callback) {
      CategoriesModel.updateOne({ _id: id }, { ...body }, (doc) => {
            callback(Response.update('success', 'Atualizado com sucesso!'));
        });
    }

    static delete(id, callback) {
      CategoriesModel.deleteOne({ _id: id }, () => {
            if (callback) callback(Response.delete('success', 'Apagado com sucesso!', id));
        });
    }
};
