const express = require("express");
const router = express.Router();
const { Stamp, User, Photo, Place } = require("../../models");

router.post("/", async (req, res) => {
  if (!req.session.logged_in) {
    return res.status(403).json({ msg: "Login before adding a stamp!" });
  }
  try {
    const newStamp = await Stamp.create({
      destination_name: req.body.destination_name,
      destination_notes: req.body.destination_notes,
      //add image url here?
      UserId: req.session.user_id,
    });
// render(profile)
    res.status(200).json(newStamp);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const dbStampData = await Stamp.findAll({
      where: { UserId: req.session.user_id },
      include: [
        { model: User, attributes: ["first_name", "last_name", "profile_pic"] },
      ],
    });

    const stamps = dbStampData.map((stamp) => stamp.get({ plain: true }));

    res.render("profile", { stamps, loggedIn: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
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

//test route for looking at seeds (we can comment out at any  time)
router.get("/", (req, res) => {
  
  Stamp.findAll({
   
  })
    .then((stamps) => {
      res.json(stamps);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred", err });
    });
});

router.get("/:id", async (req, res) => {
  try {
    const dbStampData = await Stamp.findByPk(req.params.id, {
      include: [Place],
      include: [Photo],
    });

    const stamp = dbStampData.get({ plain: true });
    res.render("profile", { stamp, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
