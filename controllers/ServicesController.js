const Service = require("../models/Services");

 const getServices= async(req,res)=>{
try {
    const services =  await Service.find();
    if(services){
    res.status(200).json(services)
    }else{
        res.status(500).send("No Service found")
    }


} catch (err) {
    res.status(500).json(err);}


}
 const createService = async (req,res)=>{
    const newService = new Service({
      title:req.body.title,
      para:req.body.para,
      logo:req.file.filename
    });
  try {
    const saveService = await newService.save();
    res.status(200).json(saveService);
  } catch (err) {
    res.status(500).json(err);
  }
}
 const editService = async (req,res)=>{
    try {
        const service = await Service.findById(req.params.id);
        if(service) {
          await service.updateOne({ $set: req.body });
          res.status(200).json("the Service has been updated");
        } else {
          res.status(403).json("Service not found");
        }
      } catch (err) {
        res.status(500).json(err);
      }
}
 const deleteService = async(req,res)=>{
    try {
        const service = await Service.findById(req.params.id);
        if(service) {
          await service.deleteOne();
          res.status(200).json("the Service has been deleted");
        } else {
          res.status(404).json("Service not found");
        }
      } catch (err) {
        res.status(500).json(err);
      }
}
module.exports = {getServices,deleteService,editService,createService}