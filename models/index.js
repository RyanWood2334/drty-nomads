const User = require("./User");
const Photo = require("./Photo");
const Stamp = require("./Stamp");
const Place = require("./Place");
const FutureTrip = require("./FutureTrip");

User.hasMany(Stamp, {
  onDelete: "CASCADE",
});

User.hasMany(FutureTrip, {
  onDelete: "CASCADE",
});
Stamp.belongsTo(User, {
  onDelete: "CASCADE",
});

Stamp.hasMany(User);

User.belongsTo(Stamp, {
  onDelete: "CASCADE",
});

Stamp.hasMany(Photo, {
  onDelete: "CASCADE",
});

Photo.belongsTo(Stamp, {
  onDelete: "SET NULL",
});

Stamp.belongsTo(Place, {
  onDelete: "SET NULL",
});

FutureTrip.belongsTo(User);

module.exports = {
  User: User,
  Photo: Photo,
  Stamp: Stamp,
  Place: Place,
  FutureTrip: FutureTrip,
};
