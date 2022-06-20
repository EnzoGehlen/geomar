const Items = require('../services/items');
const isAuthenticated = require('../middlewares/isAuth');

// test('should return all items that are lower in price than the item given', () => {
//   const items = [
//       {
//           _id: '1',
//           price: '10.00'
//       },
//       {
//           _id: '2',
//           price: '15.00'
//       },
//       {
//           _id: '3',
//           price: '5.00'
//       }
//   ];
//   const item = {
//       _id: '2',
//       price: '15.00'
//   };
//   const callback = jest.fn();

//   Items.lowerThan(items, item, ret => {
//     expect(ret).toStrictEqual([ { _id: '1', price: '10.00' }, { _id: '3', price: '5.00' } ]);
//   });  
// });



test('isAuthenticated redirects to /app when req.session.passport.user is not defined', () => {
  const req = {
    session: {
      passport: {}
    }
  };
  const res = {
    redirect: jest.fn()
  };
  const next = jest.fn();
  isAuthenticated(req, res, next);
  expect(res.redirect).toHaveBeenCalledWith('/app');
  expect(next).not.toHaveBeenCalled();
});

test('isAuthenticated calls next() when req.session.passport.user is defined', () => {
  const req = {
    session: {
      passport: {
        user: {}
      }
    }
  };
  const res = {
    redirect: jest.fn()
  };
  const next = jest.fn();
  isAuthenticated(req, res, next);
  expect(res.redirect).not.toHaveBeenCalled();
  expect(next).toHaveBeenCalled();
});