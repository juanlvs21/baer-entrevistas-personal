const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  ci: { type: String, required: true, max: 8, unique: true },
  password: { type: String, required: true, min: 6 },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  position: { type: String },
  airport: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
  surveyed: { type: Boolean, required: true, default: false },
});

userSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = model("User", userSchema);
