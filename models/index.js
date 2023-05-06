const User = require("./User");
const Passport = require("./Passport");
const Photo = require("./Photo");
const Stamp = require("./Stamp");
const Place = require("./Place");

User.hasOne(Passport, {
  onDelete: "CASCADE",
});

Passport.hasMany(Stamp, {
  onDelete: "CASCADE",
});

Passport.belongsTo(User, {
  onDelete: "CASCADE",
});

Stamp.hasOne(Place, {
  onDelete: "CASCADE",
});

Stamp.hasMany(Photo, {
  onDelete: "CASCADE",
});

Photo.belongsTo(Stamp, {
  onDelete: "SET NULL",
});

Place.belongsTo(Stamp);

module.exports = {
  Passport: Passport,
  User: User,
  Photo: Photo,
  Stamp: Stamp,
  Place: Place,
};
