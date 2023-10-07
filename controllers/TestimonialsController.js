const Testimonial = require("../models/Testimonial");

 const getTestimonials= async(req,res)=>{
try {
    const testimonials =  await Testimonial.find();
    if(testimonials){
    res.status(200).json(testimonials)
    }else{
        res.status(500).send("No Testimonial found")
    }


} catch (err) {
    res.status(500).json(err);}


}
 const createTestimonial = async (req,res)=>{
    const newTestimonial = new Testimonial({review:req.body.review,
      name:req.body.name,image:req.file.filename});
  try {
    const saveTestimonial = await newTestimonial.save();
    res.status(200).json(saveTestimonial);
  } catch (err) {
    res.status(500).json(err);
  }
}
 const editTestimonial = async (req,res)=>{
    try {
        const testimonial = await Testimonial.findById(req.params.id);
        if (testimonial) {
          await testimonial.updateOne({ $set: req.body });
          res.status(200).json("the Testimonial has been updated");
        } else {
          res.status(403).json("Testimonial not found");
        }
      } catch (err) {
        res.status(500).json(err);
      }
}
 const deleteTestimonial = async(req,res)=>{
    try {
        const testimonial = await Testimonial.findById(req.params.id);
        if (testimonial) {
          await Testimonial.deleteOne();
          res.status(200).json("the Testimonial has been deleted");
        } else {
          res.status(404).json("Testimonial not found");
        }
      } catch (err) {
        res.status(500).json(err);
      }
}
module.exports = {getTestimonials,deleteTestimonial,editTestimonial,createTestimonial}