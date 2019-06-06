module.exports = function (sequelize, DataTypes) {
  // Photo object for sequelize to add to data to database
  const Photo = sequelize.define("Photo", {
    source: {
      type: DataTypes.TEXT
    }
  });

  Photo.associate = function(models) {
    // Photo keyed with Conact
    Photo.belongsTo(models.Contact, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Photo;
};