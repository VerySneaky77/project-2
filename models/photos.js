var Photos = sequelize.define("photos", {
    photoId : {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    source {
        type: DataTypes.STRING,
      }
});
return Photos;