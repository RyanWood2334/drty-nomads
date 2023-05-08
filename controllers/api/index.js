const router = require("express").Router();
const express = require("express");
const { User } = require("../../models");


const photoRoutes = require("./photoController")
// const userRoutes = require("./userController");
// const stampRoutes = require("./stampController");
// const placeRoutes = require("./placeController");

// Import controllers for all models here

// Users Controller goes here

// Passport Controller goes here

// Photo Controller goes here

// Place Controller goes here

// Stamp Controller goes here

router.use("/api/photos", photoRoutes);
// router.use("/api/stamps", stampRoutes);
// router.use("/api/places", placeRoutes);
// router.use("/api/users", userRoutes);

module.exports = router;
