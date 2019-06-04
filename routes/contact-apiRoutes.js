var db = require("../models");

module.exports = function(app) {
  // Get all contacts
  app.get("/api/contacts", function(req, res) {
    db.Contact.findAll({}).then(function(dbContacts) {
      res.json(dbContacts);
    });
  });

  // Create a new contact
  app.post("/api/contacts", function(req, res) {
    db.Contact.create(req.body).then(function(dbContacts) {
      res.json(dbContacts);
    });
  });

  // Delete a contact by id
  // app.delete("/api/contacts/:id", function(req, res) {
  //   db.Contact.destroy({ where: { id: req.params.id } }).then(function(dbContacts) {
  //     res.json(dbContacts);
  //   });
  // });
};