module.exports = function (sequelize, DataTypes) {
  var Contact = sequelize.define("Contact", {
    nameFirst : {
      type: DataTypes.STRING,
      allowNull: false
    },
    nameLast : {
      type: DataTypes.STRING,
      allowNull: false
    },
    nameMiddle: {
      type: DataTypes.STRING,
    },
    numPhone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    streetAddress: {
      type: DataTypes.STRING,
    },
    cityAddress: {
      type: DataTypes.STRING,
    },
    stateAddress: {
      type: DataTypes.STRING,
    },
    zipCode: {
      type: DataTypes.STRING,
    },
    emailAddress: {
      type: DataTypes.STRING,
    },
    profession: {
      type: DataTypes.STRING,
    }
  });

  Contact.associate = function(models) {
    // When a contact is deleted, also delete any associated Photos
    Contact.hasMany(models.Photo, {
      onDelete: "cascade"
    });
  };
  return Contact;
};