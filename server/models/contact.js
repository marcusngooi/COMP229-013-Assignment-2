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

module.exports = mongoose.model("Contact", contactsModel);
