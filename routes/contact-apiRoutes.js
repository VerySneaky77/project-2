var db = require("../models");

module.exports = function (app) {
  // Get all contacts
  app.get("/api/contacts", function (req, res) {
    db.Contact.findAll({}).then(function (dbContacts) {
      res.json(dbContacts);
    });
  });

  // Get route for retrieving a single contact
  app.get("/api/view/:id", function (req, res) {
    // Set models to include in a left outer join
    db.Contact.findOne({
      where: {
        id: req.params.id
      },
      include: [dbPhoto]
    }).then(function (dbContact) {
      res.json(dbContact);
    });
  });
  
  // PUT route for updating contacts
  app.put("/api/edit", function(req, res) {
    db.Contact.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbContact) {
        res.json(dbContact);
      });
  });

  // Create a new contact
  app.post("/api/contacts", function (req, res) {
    db.Contact.create(req.body).then(function (dbContacts) {
      res.json(dbContacts);
    });
  });
};