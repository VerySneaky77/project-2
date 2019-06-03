var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/contacts", function(req, res) {
    db.Contact.findAll({}).then(function(dbContacts) {
      res.json(dbContacts);
    });
  });

  // Create a new example
  app.post("/api/contacts", function(req, res) {
    db.Contact.create(req.body).then(function(dbContacts) {
      res.json(dbContacts);
    });
  });

  // Delete an example by id
  app.delete("/api/contacts/:id", function(req, res) {
    db.Contact.destroy({ where: { id: req.params.id } }).then(function(dbContacts) {
      res.json(dbContacts);
    });
  });
};