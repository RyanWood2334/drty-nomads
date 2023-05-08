const express = require("express");
const router = express.Router();
const { Photo } = require("../../models");

router.get("/", (req, res) => {
  Photo.findAll({
    include: [Animal],
  })
    .then((photos) => {
      res.json(photos);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred", err });
    });
});

router.get("/:id", (req, res) => {
  Photo.findByPk(req.params.id)
    .then((photoData) => {
      res.json(photoData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred", err });
    });
});
