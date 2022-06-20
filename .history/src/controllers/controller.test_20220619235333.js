const Items = require('../services/items');
test('should return all items that are lower in price than the item given', () => {
  const items = [
      {
          _id: '1',
          price: '10.00'
      },
      {
          _id: '2',
          price: '15.00'
      },
      {
          _id: '3',
          price: '5.00'
      }
  ];
  const item = {
      _id: '2',
      price: '15.00'
  };
  const callback = jest.fn();

  Items.lowerThan(items, item, ret => {
    console.log(ret);
  });


  expect(callback).toBe([ { _id: '1', price: '10.00' }, { _id: '3', price: '5.00' } ]);
});