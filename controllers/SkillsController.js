const Skill = require("../models/Skill");

 const getSkills= async(req,res)=>{
try {
    const Skills =  await Skill.find();
    if(Skills){
    res.status(200).json(Skills)
    }else{
        res.status(500).send("No Skill found")
    }


} catch (err) {
    res.status(500).json(err);}


}
 const createSkill = async (req,res)=>{
    const newSkill = new Skill({
      name:req.body.name,
      para:req.body.para,
      logo:req.file.filename
    });
  try {
    const saveSkill = await newSkill.save();
    res.status(200).json(saveSkill);
  } catch (err) {
    res.status(500).json(err);
  }
}
 const editSkill = async (req,res)=>{
    try {
        const skill = await Skill.findById(req.params.id);
        if(skill) {
          await skill.updateOne({ $set: req.body });
          res.status(200).json("the Skill has been updated");
        } else {
          res.status(403).json("Skill not found");
        }
      } catch (err) {
        res.status(500).json(err);
      }
}
 const deleteSkill = async(req,res)=>{
    try {
        const skill = await Skill.findById(req.params.id);
        if(skill) {
          await skill.deleteOne();
          res.status(200).json("the Skill has been deleted");
        } else {
          res.status(404).json("Skill not found");
        }
      } catch (err) {
        res.status(500).json(err);
      }
}
module.exports = {getSkills,deleteSkill,editSkill,createSkill}