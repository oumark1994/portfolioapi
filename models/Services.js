const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    para: {
      type: String,
      required:true
    },
    logo: {
        type: String,
        required:true
      },   
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service",ServiceSchema);