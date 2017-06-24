var GitUser = require("../models/gituser");
module.exports = {
  // This method handles retrieving quotes from the db
  index: function(req, res) {
    var query;
    if (req.query) {
      query = req.query;
    }
    else {
      query = req.params.id ? { login: req.params.id } : {};
    }
    GitUser.find(query)
      .then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
  },
  // This method handles creating new quotes
  create: function(req, res) {
    GitUser.create(req.body).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};
