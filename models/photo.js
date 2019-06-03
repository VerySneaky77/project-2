module.exports = function (sequelize, DataTypes) {
  const Photo = sequelize.define("Photo", {
    photoId: {
      type: DataTypes.INTEGER,

    },
    source: {
      type: DataTypes.TEXT
    }
  });
  return Photo;
};