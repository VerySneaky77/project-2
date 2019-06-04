var db = require("../models");

module.exports = function (app) {

  app.get("/api/contacts/photo", function (req, res) {
    // Get photos for a selected contact
    var query = {};
    if (req.query.contactId) {
      query.contactId = req.query.contactId;
    }

    db.Photo.findAll({
      where: query,
      include: [db.Contact]
    }).then(function (dbPhoto) {
      res.json(dbPhoto);
    });
  });

  // Create a new photo
  app.post("/api/contacts/photo", function (req, res) {
    db.Photo.create(req.body).then(function (dbPhoto) {
      res.json(dbPhoto);
    });
  });

  // Delete a photo by its ID
  //   app.delete("/api/contacts/:contactId/:photoId", function (req, res) {
  //     db.Photo.destroy({ where: { id: req.params.photoId } }).then(function (dbPhoto) {
  //       res.json(dbPhoto);
  //     });
  //   });
};