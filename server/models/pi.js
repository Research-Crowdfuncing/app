'use strict';
module.exports = function(sequelize, DataTypes) {
  var Pi = sequelize.define('Pi', {
    name: DataTypes.STRING,
    institution: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here

        Pi.belongsTo(models.Category)
        Pi.belongsToMany(models.Project, {through: 'PiProjects'});
      }
    }
  });

  Pi.associate = function(models) {
    Pi.belongsTo(models.Category)
    Pi.belongsToMany(models.Project, {through: 'PiProjects'});
  }
  return Pi;
};