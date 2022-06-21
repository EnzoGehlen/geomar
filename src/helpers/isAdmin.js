const isAdmin = (req, res, next) => {
  if (req.session && req.session.passport && req.session.passport.user.admin) {
      next();
  } else {
      res.statusCode = 401;
      res.json('Usu�rio n�o autorizado').end();
  }
};

module.exports = isAdmin;