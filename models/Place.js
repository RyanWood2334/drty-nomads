const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Place extends Model {}

Place.init(
  //**id will auto generate
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },
    place_subregion: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isAlpha: true,
      },
    },
    place_language: {
      type: DataTypes.STRING,
      allowNull: true,
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
