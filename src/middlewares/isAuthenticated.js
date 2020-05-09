const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  else {
    if (req.url == "/auth/iniciar" || req.url == "/auth/registrarse")
      return next();
    else res.redirect("/auth/iniciar");
  }
};

module.exports = isAuthenticated;
