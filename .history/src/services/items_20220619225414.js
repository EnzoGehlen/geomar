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

    static lowerThan(items, item, callback) {
      var arrPrice = [];
      for(var i = 0; i < items.length; i++) {
          arrPrice.push(items[i].price);
      }
      threshold = parseFloat(threshold);
      for(var i = 0; i < arrPrice.length; i++) {
          arrPrice[i] = parseFloat(arrPrice[i]);
      }
      var arrResult = [];
      for(var i = 0; i < arrPrice.length; i++) {
          if(arrPrice[i] <= threshold) {
              arrResult.push(items[i]);
          }
      }
      callback(arrResult);
  }

    static getItemByPrice(id, callback) {
      ItemsModel.findOne({ _id: id }).then((resp) => {
        const item = resp;
        ItemsModel.find().then((resp) => {
          const ret = this.lowerThan(resp, item, (ret) => {
            callback(ret);
          });
      });
    });
  }
    

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
