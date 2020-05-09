const moment = require("moment");

// Models
const Survey = require("../models/survey");

const controller = {};

controller.showIndex = async (req, res, next) => {
  const surveyErrorMessage = req.flash("surveyErrorMessage");

  const existSurvey = await Survey.findOne({ ci_user: req.user.ci });

  if (existSurvey) {
    existSurvey.date = moment(existSurvey.date).format("DD/MM/YYYY hh:ss");

    res.render("survey/show", {
      user: req.user,
      survey: existSurvey,
      surveyErrorMessage,
    });
  } else res.render("survey/create", { user: req.user, surveyErrorMessage });
};

controller.createSurvey = async (req, res, next) => {
  const {
    howIsItTransported,
    dinningRoom,
    foodBag,
    foodBagFrequency,
    bonuses,
    transport,
    howDoesItFeel,
  } = req.body;

  const survey = new Survey({
    ci_user: req.user.ci,
    firstName_user: req.user.firstName,
    lastName_user: req.user.lastName,
    airport: req.user.airport,
    date: moment().format("YYYY-MM-DDTHH:mm:ssZ"),
    howIsItTransported,
    dinningRoom,
    howDoesItFeel,
    benefits: {
      foodBag,
      foodBagFrequency,
      bonuses,
      transport,
    },
  });

  // Save survey
  const surveySave = await survey.save();

  if (!surveySave)
    req.flash(
      "surveyErrorMessage",
      "Ha ocurrido un error al guardar su encuesta"
    );

  res.redirect("/");
};

module.exports = controller;
