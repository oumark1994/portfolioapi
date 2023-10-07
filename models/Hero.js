const mongoose = require("mongoose");

const HeroSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    btnText: {
      type: String,
      required: true,
    },
    image: {
        type: String,
        required: true,
      } ,
      count1: {
        type: String,
        required: true,
      },
      text1: {
        type: String,
        required: true,
      },
      text2: {
        type: String,
        required: true,
      },
      count2: {
        type: String,
        required: true,
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hero",HeroSchema);