'use strict';
module.exports = (sequelize, DataTypes) => {
  const tbl_user = sequelize.define('tbl_user', {
    name: DataTypes.STRING
  }, {});
  tbl_user.associate = function(models) {
    // associations can be defined here
  };
  return tbl_user;
};