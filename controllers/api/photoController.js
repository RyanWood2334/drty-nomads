const express = require("express");
const router = express.Router();
const { Photo, Place, Stamp } = require("../../models");

router.get("/", (req, res) => {
  Photo.findAll()
    .then((photos) => {
      res.json(photos);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred", err });
    });
});

router.get("/:id", (req, res) => {
  Photo.findByPk(req.params.id, {
    include: [Place],
    include: [Stamp],
  })
    .then((photoData) => {
      res.json(photoData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred", err });
    });
});

router.delete("/:id", (req, res) => {
  Photo.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletePhoto) => {
      res.json(deletePhoto);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred", err });
    });
});
