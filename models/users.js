'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.users.belongsTo(models.roles, {foreignKey: 'roleID'}),
      models.users.belongsTo(models.points, {foreignKey: 'username'})
    }
  };
  users.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    roleID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};