const router = require("express").Router();
const { User } = require("../../models");

const userRoutes = require("./userRoutes");
const stampRoutes = require("./stampRoutes");
const placeRoutes = require("./~placeRoutes");

// Import controllers for all models here

// Users Controller goes here

// Passport Controller goes here

// Photo Controller goes here

// Place Controller goes here

// Stamp Controller goes here

// router.use("/api/photos", photoRoutes);
router.use("/stamps", stampRoutes);
router.use("/places", placeRoutes);
router.use("/user", userRoutes);

module.exports = router;
