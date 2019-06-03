var db = require("../models");

module.exports = function(app) {
  // Get photos for a selected contact
  app.get("/api/:contactId/photo", function(req, res) {
    db.Photo.findAll({where: k}).then(function(dbPhoto) {
      res.json(dbPhoto);
    });
  });

  // Create a new photo
  app.post("/api/:contactId/photo", function(req, res) {
    db.Photo.create(req.body).then(function(dbPhoto) {
      res.json(dbPhoto);
    });
  });

  // Delete a photo by its ID
  app.delete("/api/:contactId/:photoId", function(req, res) {
    db.Photo.destroy({ where: { id: req.params.id } }).then(function(dbPhoto) {
      res.json(dbPhoto);
    });
  });
};