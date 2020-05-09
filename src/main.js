const express = require("express");
const session = require("express-session");
const engine = require("ejs-mate");
const path = require("path");
const morgan = require("morgan");
const passport = require("passport");
const flash = require("connect-flash");
const dotenv = require("dotenv").config();
const compression = require("compression");

// Initializations
const app = express();
require("./database");
require("./utils/passport/local-auth");

// Settings
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(compression());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Static
app.use("/static", express.static(__dirname + "/assets"));

// Routes
app.use("/", require("./routes/index"));

// Run server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
