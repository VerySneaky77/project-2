var db = require("../models");

module.exports = function (app) {
  app.get("/api/view/:id", function (req, res) {
    // Get photos for a selected contact
    var query = {};
    if (req.query.id) {
      query.ContactId = req.query.id;
    }

    db.Photo.findAll({
      where: query,
      include: [db.Contact]
    }).then(function (dbPhoto) {
      res.json(dbPhoto);
    });
  });

  // Create a new photo
  app.post("/api/view/addPhoto", function (req, res) {
    db.Photo.create(req.body).then(function (dbPhoto) {
      res.json(dbPhoto);
    });
  });
};