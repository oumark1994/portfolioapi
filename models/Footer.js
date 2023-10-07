const mongoose = require("mongoose");

const FooterSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
   
    link: {
        type: String,
    
      }
   
  },
 
  { timestamps: true }
);

module.exports = mongoose.model("Footer",FooterSchema);