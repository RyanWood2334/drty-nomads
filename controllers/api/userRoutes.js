const express = require("express");
const router = express.Router();
const { User } = require("../../models");

<<<<<<< HEAD
// const router = require('express').Router();
// const { User } = require('../../models');

router.post("/", async (req, res) => {
=======
router.post('/', async (req, res) => {

  const newUser = {
    first_name: req.body.name,
    user_name: req.body.username,
    password: req.body.password,
  }

>>>>>>> dev
  try {
    const userData = await User.create(newUser);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

<<<<<<< HEAD
router.post("/login", async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
=======
router.post('/login', (req, res) => {
  // Find the user who matches the posted e-mail address
  User.findOne({ where: { user_name: req.body.username } }).then((userData) => {
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email ' });
>>>>>>> dev
      return;
    }

  // Verify the posted password with the password store in the database
  const validPassword = userData.checkPassword(req.body.password);

<<<<<<< HEAD
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
=======
  if (!validPassword) {
    res
      .status(400)
      .json({ message: 'Incorrect password' });
    return;
>>>>>>> dev
  }

  // Create session variables based on the logged in user
  req.session.save(() => {
    req.session.user_id = userData.id;
    req.session.logged_in = true;
    
    res.json({ user: userData, message: 'You are now logged in!' });
  });


  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  })

});

<<<<<<< HEAD
// router.post to create new user.

router.post("/logout", (req, res) => {
=======
router.post('/logout', (req, res) => {
>>>>>>> dev
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//test route for looking at seeds (we can comment out at any  time)
router.get("/", (req, res) => {
  User.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred", err });
    });
});

module.exports = router;
