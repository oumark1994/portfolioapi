const Contact = require("../models/Contact");

 const getContact= async(req,res)=>{
try {
    const Contacts =  await Contact.find();
    if(Contacts){
    res.status(200).json(Contacts)
    }else{
        res.status(500).send("No Contact found")
    }


} catch (err) {
    res.status(500).json(err);}


}
 const createContact = async (req,res)=>{
    const newContact = new Contact(req.body);
  try {
    const saveContact = await newContact.save();
    res.status(200).json(saveContact);
  } catch (err) {
    res.status(500).json(err);
  }
}
 const editContact = async (req,res)=>{
    try {
        const Contact = await Contact.findById(req.params.id);
        if (Contact) {
          await Contact.updateOne({ $set: req.body });
          res.status(200).json("the Contact has been updated");
        } else {
          res.status(403).json("Contact not found");
        }
      } catch (err) {
        res.status(500).json(err);
      }
}
 const deleteContact = async(req,res)=>{
    try {
        const Contact = await Contact.findById(req.params.id);
        if (Contact) {
          await Contact.deleteOne();
          res.status(200).json("the Contact has been deleted");
        } else {
          res.status(404).json("Contact not found");
        }
      } catch (err) {
        res.status(500).json(err);
      }
}
module.exports = {getContact,deleteContact,editContact,createContact}