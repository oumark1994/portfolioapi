const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required:true
    },
    name: {
        type: String,
        required:true
      },   
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Testimonial",TestimonialSchema);