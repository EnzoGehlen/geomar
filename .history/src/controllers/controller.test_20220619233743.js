const AbstractController = require('./abstract/abstract');
test('should return an id', () => {
  
  const req = {
      body: {},
  };
  const res = {
      json: jest.fn(),
      status: jest.fn(),
      end: jest.fn(),
  };
  const service = {
      create: jest.fn((req, resp) => {
          if (resp.id) data.data.id = resp.id;
          data.messages = resp.messages;
          data.data.type = resp.type;
          res.json(data).status(resp.statusCode).end();
      }),
  };
  const Abstract = new AbstractController(service);
  create(req, res, service);
  expect(res.json).toHaveBeenCalledWith({
      data: {
          id: 1,
      },
      messages: [],
      type: '',
  });
});