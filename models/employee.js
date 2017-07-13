'use strict';
module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define('Employee', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    id_role: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Employee.belongsTo(models.Role, {foreignKey: 'id_role'})
      }
    }
  });
  return Employee;
};