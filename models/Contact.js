const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required:true
    },
    link: {
        type: String,
    
      },  
      footer:{
        type: String,
        required:true
    }, 
   
  },
 

  { timestamps: true }
);

module.exports = mongoose.model("Contact",ContactSchema);