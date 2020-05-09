const { Schema, model } = require("mongoose");

const airportSchema = new Schema({
  name: { type: String, required: true, unique: true },
});

module.exports = model("Airport", airportSchema);
