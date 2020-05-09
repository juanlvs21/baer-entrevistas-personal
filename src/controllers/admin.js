const moment = require("moment");
const bannerBase64 = require("../utils/bannerBase64");
const logoBase64 = require("../utils/logoBase64");

// Models
const Airport = require("../models/airport");
const Survey = require("../models/survey");

const controller = {};

controller.showIndex = async (req, res, next) => {
  const surveys = await Survey.find().sort({ airport: 1 });
  const totalSurveys = surveys.length;
  let airports = await Airport.find();

  airports = airports.map((airport) => {
    let numberSurveys = 0;

    surveys.map((survey) => {
      if (survey.airport == airport.name) numberSurveys++;
    });

    return {
      _id: airport._id,
      name: airport.name,
      numberSurveys,
    };
  });

  res.render("admin/index", {
    user: req.user,
    airports,
    surveys,
    totalSurveys,
    bannerBase64,
    logoBase64,
  });
};

controller.surveyAirport = async (req, res, next) => {
  const { id } = req.params;

  const airport = await Airport.findOne({ _id: id });
  const surveys = await Survey.find({ airport: airport.name });

  res.render("admin/surveysAirport", {
    user: req.user,
    airport: airport.name,
    surveys,
    moment,
    bannerBase64,
    logoBase64,
  });
};

module.exports = controller;
