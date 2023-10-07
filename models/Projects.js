const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required:true
    },
    image: {
        type: String,
        required:true
    },
    projectLink: {
        type: String,
        required:true
    },   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project",ProjectSchema);