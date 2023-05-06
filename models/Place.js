const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Place extends Model {}

Place.init(
  //**id will auto generate
  {
    place_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },
  },
  {
    sequelize,
  }
);

module.exports = Place;
