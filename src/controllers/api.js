// Models
const Survey = require("../models/survey");
const Airport = require("../models/airport");

const controller = {};

controller.getAllSuvery = async (req, res, next) => {
  try {
    const surveys = await Survey.find().sort({ airport: 1 });

    if (surveys.length) {
      res.status(200).json({
        data: surveys,
      });
    } else {
      res.status(404).json({
        data: " Error al generar reporte",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: "Error interno del servidor",
    });
  }
};

controller.getSuveryAirport = async (req, res, next) => {
  try {
    const { id } = req.params;

    const airport = await Airport.findOne({ _id: id });
    if (airport) {
      const surveys = await Survey.find({ airport: airport.name });

      res.status(200).json({
        data: surveys,
      });
    } else {
      res.status(404).json({
        data: "Aeropuerto no encontrado",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: "Error interno del servidor",
    });
  }
};

controller.getDetailSuvery = async (req, res, next) => {
  try {
    const { id } = req.params;

    const surveys = await Survey.findOne({ _id: id });

    if (surveys) {
      res.status(200).json({
        data: surveys,
      });
    } else {
      res.status(404).json({
        data: "Encuesta no encontrada",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: "Error interno del servidor",
    });
  }
};

module.exports = controller;
