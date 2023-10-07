const Footer = require("../models/Footer");

 const getFooter= async(req,res)=>{
try {
    const Footers =  await Footer.find();
    if(Footers){
    res.status(200).json(Footers)
    }else{
        res.status(500).send("No Footer found")
    }


} catch (err) {
    res.status(500).json(err);}


}
 const createFooter = async (req,res)=>{
    const newFooter = new Footer(req.body);
  try {
    const saveFooter = await newFooter.save();
    res.status(200).json(saveFooter);
  } catch (err) {
    res.status(500).json(err);
  }
}
 const editFooter = async (req,res)=>{
    try {
        const Footer = await Footer.findById(req.params.id);
        if (Footer) {
          await Footer.updateOne({ $set: req.body });
          res.status(200).json("the Footer has been updated");
        } else {
          res.status(403).json("Footer not found");
        }
      } catch (err) {
        res.status(500).json(err);
      }
}
 const deleteFooter = async(req,res)=>{
    try {
        const Footer = await Footer.findById(req.params.id);
        if (Footer) {
          await Footer.deleteOne();
          res.status(200).json("the Footer has been deleted");
        } else {
          res.status(404).json("Footer not found");
        }
      } catch (err) {
        res.status(500).json(err);
      }
}
module.exports = {getFooter,deleteFooter,editFooter,createFooter}