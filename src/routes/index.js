const { Router } = require("express");
const router = Router();

// Controllers
const app = require("../controllers/app");
const auth = require("../controllers/auth");
const survey = require("../controllers/survey");
const administrador = require("../controllers/admin");
const api = require("../controllers/api");

// Middlewares
const isAuthenticated = require("../middlewares/isAuthenticated");
const isAdmin = require("../middlewares/isAdmin");

// Auth
router.get("/auth/iniciar", auth.showSignin);
router.post("/auth/iniciar", auth.signin);
router.post("/auth/salir", auth.logout);

// Survey
router.get("/", isAuthenticated, survey.showIndex);
router.post("/encuesta/crear", isAuthenticated, survey.createSurvey);

// Admin
router.get("/administrar", isAuthenticated, isAdmin, administrador.showIndex);
router.get(
  "/administrar/:id",
  isAuthenticated,
  isAdmin,
  administrador.surveyAirport
);

// API
router.get("/api/v1/surveys/:id", api.getSuvery);
router.get("/api/v1/surveys", api.getAllSuvery);

// 404
router.get("*", app.notFound);

module.exports = router;
