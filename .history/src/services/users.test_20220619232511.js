test('should return error when login already exists', () => {
  const body = {
    login: 'test'
  };
  const callback = jest.fn();
  UsersModel.create(body, callback);
  expect(callback).toHaveBeenCalledWith(Response.create('error', 'Login já existe!'));
});