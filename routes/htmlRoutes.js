var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Contact.findAll({}).then(function (dbContact) {
      res.render("index", {
        contacts: dbContact
      });
    });
  });

  // Load page and pass in a contact by id
  app.get("/view/:id", function (req, res) {
    db.Contact.findOne({ where: { id: req.params.id } }).then(function (dbContact) {
      res.render("view-contact", {
        contact: dbContact
      });
    });
  });

  // Load add photo page and pass in a contact by id
  app.get("/view/:id/add", function (req, res) {
    db.Contact.findOne({ where: { id: req.params.id } }).then(function (dbContact) {
      res.render("add-photo", {
        contact: dbContact
      });
    });
  });

  // Redirect to add page
  app.get("/add", function (req, res) {
    res.render("add-contact", {
    });
  });

  // Redirect to edit page
  app.get("/edit", function (req, res) {
    res.render("view-contact", {
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
