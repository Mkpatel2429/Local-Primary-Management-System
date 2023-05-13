const mongoose = require("mongoose");
const validator=require('validator')
const complainsScehma = new mongoose.Schema(
  {
    
    fullname: {type:String,required:true,validator:{
      validator: function(v) {
        return v != null;
      },
      message: "can not be null"
    }},
    address1: {type:String,required:true,validator:{
      validator: function(v) {
        return v != null;
      },
      message: "can not be null"
    }},
    address2: {type:String,required:true,validator:{
      validator: function(v) {
        return v != null;
      },
      message: "can not be null"
    }},
    zipcode: {type:Number,required:true,validator:{
      validator: function(v) {
        return v != null;
      },
      message: "can not be null"
    }},
    city: {type:String,required:true,validator:{
      validator: function(v) {
        return v != null;
      },
      message: "can not be null"
    }},
    state:{type:String,required:true,validator:{
      validator: function(v) {
        return v != null;
      },
      message: "can not be null"
    }},
    country: {type:String,required:true,validator:{
      validator: function(v) {
        return v != null;
      },
      message: "can not be null"
    }},
    email:{type:String,required:true,validator:{
      validator: function(v) {
        return v != null;
      },
      message: "can not be null"
    }},
    mobileno:{type:Number,required:true,validator:{
      validator: function(v) {
        return v != null;
      },
      message: "can not be null"
    }},
    file: {type:String,required:true,validator:{
      validator: function(v) {
        return v != null;
      },
      message: "can not be null"
    }},
    complain:{type:String,required:true,validator:{
      validator: function(v) {
        return v != null;
      },
      message: "can not be null"
    }},
  },
  {
    collection: "userComplains",
  }
);

mongoose.model("userComplains", complainsScehma);