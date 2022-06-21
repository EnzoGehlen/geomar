const isAdmin = (req, res, next) => {
  next();
  if (req.session && req.session.user) {
      
  } else {
      res.redirect('/login');
  }
};

module.exports = isAdmin;