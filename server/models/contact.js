/*  COMP229-013 F2021
    Assignment 2
    File Name:  models/contact.js
    Student#:   301147411
    Name:       Marcus Ngooi
    Date:       October 26, 2021
 */

// require modules
let mongoose = require("mongoose");

// create a model class
let contactsModel = mongoose.Schema(
  {
    contactName: String,
    contactNumber: String,
    emailAddress: String,
  },
  {
    collection: "contacts",
  }
);

// store model in module.exports container
module.exports = mongoose.model("Contact", contactsModel);
