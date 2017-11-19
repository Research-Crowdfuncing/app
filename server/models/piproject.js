'use strict';
module.exports = function(sequelize, DataTypes) {
  var PiProject = sequelize.define('PiProject', {
    pi_id: DataTypes.INTEGER,
    project_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return PiProject;
};