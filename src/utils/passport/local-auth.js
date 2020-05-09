const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// Model
const User = require("../../models/user");

// Serialize
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);

  if (user) done(null, user);
  else done(null, false);
});

passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "ci",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, ci, password, done) => {
      // It checks if the user already exists
      const existUser = await User.findOne({ ci });

      if (existUser)
        return done(
          null,
          false,
          req.flash("signupMessage", "La cédula de identidad ya existe")
        );
      else {
        const user = new User({
          ci,
          name: req.body.name,
          airport: req.body.airport,
          // position: req.body.position,
        });

        // Creating encrypted password
        user.password = await user.encryptPassword(password);

        // Save user
        const userSave = await user.save();

        if (userSave) done(null, user);
        else
          done(
            null,
            false,
            req.flash(
              "signupMessage",
              "Ha ocurrido un error al registrar el usuario"
            )
          );
      }
    }
  )
);

passport.use(
  "local-signin",
  new LocalStrategy(
    {
      usernameField: "ci",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, ci, password, done) => {
      // It checks if the user already exists
      const user = await User.findOne({ ci });

      if (!user)
        return done(
          null,
          false,
          req.flash("signinMessage", "Cédula de identidad no registrada")
        );
      else {
        const correctPassword = await user.comparePassword(password);

        if (!correctPassword)
          return done(
            null,
            false,
            req.flash("signinMessage", "Contraseña incorrecta")
          );

        done(null, user);
      }
    }
  )
);
