var express = require("express");
var quotesController = require("../controllers/gituserController");
var router = new express.Router();
// Get all quotes (or optionally a specific quote with an id)
router.get("/gituser/:id?", gituserController.index);
// Create a new quote using data passed in req.body
router.post("/newgituser", gituserController.create);

module.exports = router;
