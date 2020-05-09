// Passport
const passport = require("passport");

const controller = {};

controller.showSignin = (req, res, next) => {
  const signinMessage = req.flash("signinMessage");
  res.render("auth/signin", { signinMessage });
};

controller.signin = passport.authenticate("local-signin", {
  successRedirect: "/",
  failureRedirect: "/auth/iniciar",
  passReqToCallback: true,
});

controller.logout = (req, res, next) => {
  req.logout();
  res.redirect("/auth/iniciar");
};

module.exports = controller;
