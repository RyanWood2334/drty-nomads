const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {}

User.init(
  {
    // ** id will auto generate
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10],
      },
    },
    user_age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_home: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    hooks: {
      beforeCreate: (userObj) => {
        console.log(userObj);
        userObj.password = bcrypt.hashSync(userObj.password, 5);
        return userObj;
      },
    },
  }
);

module.exports = User;
