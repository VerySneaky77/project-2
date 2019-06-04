module.exports = function (sequelize, DataTypes) {
  const Photo = sequelize.define("Photo", {
    photoId: {
      type: DataTypes.INTEGER,

    },
    source: {
      type: DataTypes.TEXT
    }
  });

  Photo.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Photo.belongsTo(models.Contact, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Photo;
};