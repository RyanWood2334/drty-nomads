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
router.use("/api/stamps", stampRoutes);
router.use("/api/places", placeRoutes);
router.use("/api/user", userRoutes);

module.exports = router;
