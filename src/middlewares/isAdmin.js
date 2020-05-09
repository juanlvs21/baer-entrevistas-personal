const isAdmin = (req, res, next) => {
  if (req.user.isAdmin) return next();
  else res.redirect("/");
};

module.exports = isAdmin;
