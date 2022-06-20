const UsersModel = require('../models/users');
const Response = require('../helpers/ResponseHelper').users;

module.exports = class Users {
    static create(body, callback) {
      if (!body.admin) {
        body.admin = false;
      }
      UsersModel.findOne({ login: body.login }).then((resp) => {
        if (resp) {
          callback(Response.create('error', 'Login já existe!'));
        } else {
          UsersModel.create({
            ...body
          }).then(() => callback(Response.create('success', 'Criado com sucesso!')));
        }
    })
  }

    static buy(id, callback) {
      UsersModel.findOne({ _id: id }).then((resp) => {
        if (resp) {
          resp.library.push(...resp.cart);
          resp.cart = [];
          resp.save().then((doc) => callback(Response.create('success', 'Compra realizada com sucesso!')));
        } else {
          callback(Response.create('error', 'Usuário não encontrado!'));
        }
    })
  }

    static addCart(id, body, callback) {
      UsersModel.findOne({ _id: id }).then((resp) => {
        if (resp) {
          resp.cart.push(body.id);
          resp.save().then((doc) => callback({item: doc}, Response.create('success', 'Adicionado ao carrinho!')));
        } else {
          callback(Response.create('error', 'Usuário não encontrado!'));
        }
    })
  }

  static removeFromCart(id, body, callback) {
    UsersModel.findOne({ _id: id }).then((resp) => {
      if (resp) {
        let index = resp.cart.indexOf(body.id);
          if (index > -1) {
            resp.cart.splice(index, 1);
          }
        resp.save().then(() => callback(Response.create('success', 'Removido do carrinho!')));
      } else {
        callback(Response.create('error', 'Usuário não encontrado!'));
      }
    });
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


    .populate({
      path : 'userId',
      populate : {
        path : 'reviewId'
      }
    })
    static findOne(id, callback) {
      UsersModel.findOne({ _id: id }).populate([{
        path: 'cart',
        
      }, 'library']).then((resp) => {
          callback(resp);
      });
    }

    static update(id, body, callback) {
      if (!body.admin) {
        body.admin = false;
      }
      UsersModel.findOne({ login: body.login }).then((resp) => {
        if (resp && resp._id != id) {
          callback(Response.create('error', 'Login ja existe!'));
        } else {
          UsersModel.updateOne({ _id: id }, { ...body }, (doc) => {
            callback(Response.update('success', 'Atualizado com sucesso!'));
        });
        }
    })

    }

    static delete(id, callback) {
      UsersModel.deleteOne({ _id: id }, () => {
            if (callback) callback(Response.delete('success', 'Apagado com sucesso!', id));
        });
    }
};
