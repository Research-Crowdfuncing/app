'use strict';
module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here

        Project.belongsToMany(models.Pi, { through: 'PiProject' });
      }
    }
  });

  Project.associate = (models) => {
    Project.belongsToMany(models.Pi, { through: 'PiProject' });
  }
  return Project;
};