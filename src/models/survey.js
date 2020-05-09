const { Schema, model } = require("mongoose");

const surveySchema = new Schema({
  ci_user: { type: String, required: true, max: 8, unique: true },
  firstName_user: { type: String, required: true },
  lastName_user: { type: String, required: true },
  airport: { type: String, required: true },
  date: { type: String, required: true },
  howIsItTransported: { type: String, required: true },
  dinningRoom: { type: String, required: true },
  howDoesItFeel: { type: String, required: true },
  benefits: {
    foodBag: { type: Boolean, required: true },
    foodBagFrequency: { type: String },
    bonuses: { type: Boolean, required: true },
    transport: { type: Boolean, required: true },
  },
});

module.exports = model("Survey", surveySchema);
