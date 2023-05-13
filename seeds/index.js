const sequelize = require("../config/connection");
const { User, Stamp, Place, Photo, FutureTrip } = require("../models");
const photoData = require("./photo-seeds.json");
const placeData = require("./place-seeds.json");
const userData = require("./user-seeds.json");
const stampData = require("./stamp-seeds.json");
const futureTripData = require("./futureTrip-seeds.json");

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    await Photo.bulkCreate(photoData);

    await Place.bulkCreate(placeData);

    await Stamp.bulkCreate(stampData);

    await FutureTrip.bulkCreate(futureTripData);

    process.exit(0);
  } catch (err) {
    console.log(err);
  }
};

seedDatabase();
