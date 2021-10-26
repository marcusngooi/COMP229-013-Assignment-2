// require modules for Contact routes
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let passport = require("passport");

let contactController = require("../controllers/contact");

// helper function for guard purposes
function requireAuth(req, res, next) {
    // check if the user is logged in
    if(!req.isAuthenticated()) {
        return res.redirect("/login");
    }
    next(); // goes to next call
}

// define CRUD operations for routing
// GET Route for the Business Contact List page - READ operation
router.get("/", contactController.displayContactList);

/* GET Route for displaying Add page - CREATE operation */
router.get("/add", requireAuth, contactController.displayAddPage);

/* POST Route for processing Add page - CREATE operation */
router.post("/add", requireAuth, contactController.processAddPage);

/* GET Route for displaying Edit page - UPDATE operation */
router.get("/edit/:id", requireAuth, contactController.displayEditPage);

/* POST Route for processing Edit page - UPDATE operation */
router.post("/edit/:id", requireAuth, contactController.processEditPage);

/* GET to perform Deletion - DELETE operation */
router.get("/delete/:id", requireAuth, contactController.performDelete);

module.exports = router;