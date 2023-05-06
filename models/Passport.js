const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Passport extends Model {}

Passport.init(
  {
    // **id will auto generate
    //**Foreign Key for user_id will automatically generate
  },
  {
    sequelize,
  }
);

module.exports = Passport;
