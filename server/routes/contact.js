// require modules for Contact routes
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// connect to our Contact Model
let Contact = require("../models/contact");

// define CRUD operations for routing
// GET Route for the Business Contact List page - READ operation
router.get("/", contactController.displayContactList);

/* GET Route for displaying Add page - CREATE operation */
router.get("/add", contactController.displayAddPage);

/* POST Route for processing Add page - CREATE operation */
router.post("/add", contactController.processAddPage);

/* GET Route for displaying Edit page - UPDATE operation */
router.get("/edit/:id", contactController.displayEditPage);

/* POST Route for processing Edit page - UPDATE operation */
router.post("/edit/:id", contactController.processEditPage);

/* GET to perform Deletion - DELETE operation */
router.get("/delete/:id", contactController.performDelete);

module.exports = router;