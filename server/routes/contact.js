/*  COMP229-013 F2021
    Assignment 2
    File Name:  routes/contact.js
    Student#:   301147411
    Name:       Marcus Ngooi
    Date:       October 26, 2021
 */

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
router.get("/", requireAuth, contactController.displayContactList);

/* GET Route for displaying Add page - CREATE operation */
router.get("/add", requireAuth, contactController.displayAddPage);

/* POST Route for processing Add page - CREATE operation */
router.post("/add", requireAuth, contactController.processAddPage);

/* GET Route for displaying Edit page - UPDATE operation */
router.get("/update/:id", requireAuth, contactController.displayUpdatePage);

/* POST Route for processing Edit page - UPDATE operation */
router.post("/update/:id", requireAuth, contactController.processUpdatePage);

/* GET to perform Deletion - DELETE operation */
router.get("/delete/:id", requireAuth, contactController.performDelete);

module.exports = router;