const router = require("express").Router();
const { User, Stamp, Place, Photo } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render("logohome", {
      // projects,
      logged_in: req.session.logged_in,
      account_deleted: req.query.account_deleted,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render("logohome", {
      // projects,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/", async (req, res) => {
//     try {
//         const userData = await User.findAll({
//       attributes: { exclude: ["password"] },
//       include: [
//         {
//           model: Stamp,
//           include: [Place, Photo],
//         },
//       ],
//       order: [["name", "ASC"]],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render("logohome", {
//       users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//       res.status(500).json(err);
//     }
//   });

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

//get all users for our homepage
// router.get("/home", async (req, res) => {
//   try {
//     const dbUserData = await User.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ["first_name", "last_name", "profile_pic"],
//           include: [Photo],
//         },
//       ],
//     });

//     const users = dbUserData.map((users) => users.get({ plain: true }));

//     res.render("homepage", {
//       users,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

//get one user
router.get("/profile", withAuth, async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Stamp,
          // model: Place,
          // model: Photo,
        },
      ],
    });

    const user = dbUserData.get({ plain: true });

    const stamp = user.Stamps;

    const logged = true;

    console.log(stamp);
    // add google maps api key
    res.render(`profile`, {
      user,
      stamp,
      logged,
      loggedIn: req.session.loggedIn,
      mapsApiKey: process.env.MAPS_API_KEY,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get one user
router.get("/profile", withAuth, async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.session.user_id);
    res.render("profile", {
      firstName: dbUserData.first_name,
      lastName: dbUserData.last_name,
      country: dbUserData.user_home,
      aboutMe: dbUserData.about_me,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/users/:id", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [Stamp],
    });

    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = userData.get({ plain: true });
    const stamps = user.Stamps;

    console.log(user);

    const logged = true;

    res.render("user", {
      user,
      stamps,
      logged,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.session.user_id, {
      include: [Stamp],
    });
    const user = dbUserData.get({ plain: true });
    res.render("profile", {
      firstName: dbUserData.first_name,
      lastName: dbUserData.last_name,
      country: dbUserData.user_home,
      aboutMe: dbUserData.about_me,
      photos: dbUserData.Photos,
      destinationName: dbUserData.destination_name,
      destinationNotes: dbUserData.destination_notes,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    const dbStampData = await Stamp.findByPk(req.session.user_id);
    console.log(dbStampData);
    res.render("profile", {
      photos: dbStampData.Photos,
      destinationName: dbStampData.destination_name,
      destinationNotes: dbStampData.destination_notes,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/stamps/:id", withAuth, async (req, res) => {
  try {
    const dbStampData = await Stamp.findByPk(req.params.id, {
      include: [Place, User, Photo],
    });

    if (!dbStampData) {
      return res.status(404).json({ message: "Stamp not found" });
    }

    const stamp = dbStampData.get({ plain: true });
    const user = stamp.User;

    logged = true;
    // console.log(stamp);

    res.render("stamps", {
      stamp,
      user,
      logged,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/home", async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [Stamp],
    });
    const users = userData.map((user) => user.get({ plain: true }));
    console.log(users);
    const logged = true;

    res.render("homepage", { users, logged, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get("/profile/stamps", async (req, res) => {
//   try {
//     const dbUserData = await Stamp.findAll({
//       include: [
//         {
//           model: Stamp,
//           attributes: ["destination_name" , "destination_notes"],

//         },
//       ],
//     });
//     const stamps = dbUserData.map((users)=> users.get({plain:true}))
//     res.render("profile", {
//       stamps,
//       loggedIn: req.session.loggedIn,
//     });

//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

//get one stamp
// router.get("/stamp/:id", async (req, res) => {
//   try {
//     const dbStampData = await Stamp.findByPk(req.params.id, {
//       include: [Place],
//       include: [Photo],
//     });

//     const stamp = dbStampData.get({ plain: true });
//     res.render("stamps", { stamp, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
