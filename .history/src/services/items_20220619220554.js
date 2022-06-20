const ItemsModel = require('../models/items');
const Response = require('../helpers/ResponseHelper').items;

module.exports = class Items {
    static create(body, callback) {
      ItemsModel.create({
        ...body
      }).then(() => callback(Response.create('success', 'Criado com sucesso!')));
    }

    static get(params, callback) {
        let query = {};
        ItemsModel.find().populate('category').then((resp) => {
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

    static getItemByPrice(id, callback) {
      ItemsModel.findOne({ _id: id }).then((resp) => {
        const price = resp.price;
        //TODO: get all items with price less than price
        ItemsModel.find({ price: { $lt: price } }).then((resp) => {
          let ret = [];
          resp.forEach((item) => {
            ret.push({
              ...item._doc,
              actions: `<a class="button_trigger" onclick="form('${item._id}')" style='cursor:pointer' >Editar</a> | <a  style='cursor:pointer' onclick="del('${item._id}')">Apagar</a>`,
            });
          });
          callback(ret);
      });
    })
    

    static findOne(id, callback) {
      ItemsModel.findOne({ _id: id }).populate('category').then((resp) => {
          callback(resp);
      });
    }

    static update(id, body, callback) {
      ItemsModel.updateOne({ _id: id }, { ...body }, (doc) => {
            callback(Response.update('success', 'Atualizado com sucesso!'));
        });
    }

    static delete(id, callback) {
      ItemsModel.deleteOne({ _id: id }, () => {
            if (callback) callback(Response.delete('success', 'Apagado com sucesso!', id));
        });
    }
};
