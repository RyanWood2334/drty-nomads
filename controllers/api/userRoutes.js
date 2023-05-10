const express = require("express");
const router = express.Router();
const { User } = require("../../models");

// Base route is: /api/user
router.post("/", async (req, res) => {
  const newUser = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    user_name: req.body.username,
    password: req.body.password,
    // profile_pic: req.body.profile_pic,
    user_age: req.body.user_age,
    user_home: req.body.user_home,
    about_me: req.body.about_me,
  };

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

router.post("/login", (req, res) => {
  // Find the user who matches the posted e-mail address
  User.findOne({ where: { user_name: req.body.username } })
    .then((userData) => {
      if (!userData) {
        res.status(400).json({ message: "Invalid username/password" });
        return;
      }

      // Verify the posted password with the password store in the database
      const validPassword = userData.checkPassword(req.body.password);

      if (!validPassword) {
        res.status(400).json({ message: "Invalid username/password" });
        return;
      }

      // Create session variables based on the logged in user
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;

        res.json({ user: userData, message: "You are now logged in!" });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      logged = false;
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
