const controller = {};

controller.notFound = (req, res, next) => {
  res.render("404", { user: req.user });
};

module.exports = controller;
