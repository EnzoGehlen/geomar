const AbstractController = require('./abstract/abstract');
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
      pr