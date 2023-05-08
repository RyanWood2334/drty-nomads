const express = require("express");
const router = express.Router();
const { Stamp } = require("../../models");

router.post("/", async (req, res) => {
  if (!req.session.logged_in) {
    return res.status(403).json({ msg: "Login before adding a stamp!" });
  }
  try {
    const newStamp = await Stamp.create({
      destination_name: req.body.destination_name,
      destination_notes: req.body.destination_notes,
      //add image url here?
      user_id: req.session.user_id,
    });

    res.status(200).json(newStamp);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  if (!req.session.logged_in) {
    return res.status(403).json({ msg: "Login before deleting a stamp!" });
  }
  try {
    const projectData = await Stamp.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

module.exports = router;
