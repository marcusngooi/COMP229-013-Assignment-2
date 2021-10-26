/*  COMP229-013 F2021
    Assignment 2
    File Name:  routes/index.js
    Student#:   301147411
    Name:       Marcus Ngooi
    Date:       October 26, 2021
 */

// require modules
let express = require("express");
let router = express.Router();

let indexController = require("../controllers/index");

/* GET home page. */
router.get("/", indexController.displayHomePage);

/* GET home page. */
router.get("/home", indexController.displayHomePage);

/* GET about me page. */
router.get("/about", indexController.displayAboutPage);

/* GET projects page. */
router.get("/projects", indexController.displayProjectsPage);

/* GET services page. */
router.get("/services", indexController.displayServicesPage);

/* GET contact me page. */
router.get("/contact", indexController.displayContactPage);

/* GET Route for displaying Login page*/
router.get("/login", indexController.displayLoginPage);

/* POST Route for processing Login page*/
router.post("/login", indexController.processLoginPage);

/* GET Route for displaying Register page*/
router.get("/register", indexController.displayRegisterPage);

/* POST Route for processing Register page*/
router.post("/register", indexController.processRegisterPage);

/* GET to perform User Logout*/
router.get("/logout", indexController.performLogout);

module.exports = router;
