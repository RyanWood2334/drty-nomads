const router = require("express").Router();
const { User, Stamp, Place, Photo } = require("../models");
const withAuth = require("../utils/auth");



  router.get('/', async (req, res) => {
  try {
    
    // Pass serialized data and session flag into template
    res.render('logohome', { 
      // projects, 
      logged_in: req.session.logged_in 
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
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

//get all users for our homepage
router.get("/home", async (req, res) => {
  try {
    const dbUserData = await User.findAll({
      include: [
        {
          model: User,
          attributes: ["first_name", "last_name", "profile_pic"],
          include: [Photo],
        },
      ],
    });

    const users = dbUserData.map((users) => users.get({ plain: true }));

    res.render("homepage", {
      users,
      loggedIn: req.session.loggedIn,
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
    res.render("profile", { firstName: dbUserData.first_name , country: dbUserData.user_home , aboutMe: dbUserData.about_me , profilePic:dbUserData.e_pic});
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
router.get("/stamp/:id", async (req, res) => {
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
