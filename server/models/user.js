/*  COMP229-013 F2021
    Assignment 2
    File Name:  models/user.js
    Student#:   301147411
    Name:       Marcus Ngooi
    Date:       October 26, 2021
 */

// require modules for the User Model
let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

// create a model class
let User = mongoose.Schema(
  {
    username: {
      type: String,
      default: "",
      trim: true,
      required: "username is required",
    },
    /* 
    password:
    {
        type: String,
        default: "",
        trim: true,
        required: "password is required"
    }
    */
    email: {
      type: String,
      default: "",
      trim: true,
      required: "email address is required",
    },
    displayName: {
      type: String,
      default: "",
      trim: true,
      required: "Display Name is required",
    },
    created: {
      type: Date,
      default: Date.now,
    },
    update: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "users",
  }
);

// configure options for User Model
let options = { missingPasswordError: "Wrong / Missing Password" };
User.plugin(passportLocalMongoose, options);

// store model in module.exports container
module.exports.User = mongoose.model("User", User);
