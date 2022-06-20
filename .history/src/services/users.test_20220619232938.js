const Users = require('./users');
const Response = require('../helpers/ResponseHelper').users;

test('should return error when login already exists', () => {
  const body = {
    login: 'test'
  };
  const callback = jest.fn();
  Users.create(body, callback);
  expect(callback).toHaveBeenCalledWith(Response.create('error', 'Login já existe!'));
});