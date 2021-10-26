/*  COMP229-013 F2021
    Assignment 2
    File Name:  routes/users.js
    Student#:   301147411
    Name:       Marcus Ngooi
    Date:       October 26, 2021
 */

let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
