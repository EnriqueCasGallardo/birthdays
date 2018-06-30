"use strict";
module.exports = (sequelize, DataTypes) => {
  var Person = sequelize.define(
    "Person",
    {
      name: DataTypes.STRING,
      birth_date: DataTypes.DATEONLY
      console.log(name);
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );

  Person.prototype.age = function() {
    return this.getDataValue("age");
  };

  return Person;
};
