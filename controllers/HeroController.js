const Hero = require("../models/Hero");

 const getHeroes= async(req,res)=>{
try {
    const heros =  await Hero.find();
    if(heros){
    res.status(200).json(heros)
    }else{
        res.status(500).send("No Hero found")
    }


} catch (err) {
    res.status(500).json(err);}


}
const getHero = async (req,res)=>{
  try {
const hero =  await Hero.findById(req.params.id);
res.status(200).json(hero)
  } catch (err) {
    res.status(500).json(err);
  
  }
}
 const createHero = async (req,res)=>{
  // console.log(req.file)
    const newHero = new Hero({
      firstname:req.body.firstname,
      lastname:req.body.lastname,
      title:req.body.title,
      text1:req.body.text1,
      text2:req.body.text2,
      count1:req.body.count1,
      count2:req.body.count2,
      btnText:req.body.btnText,
      image:req.file.filename
    });
  try {
    const saveHero = await newHero.save();
    res.status(200).json(saveHero);
  } catch (err) {
    res.status(500).json(err);
  }
}
 const editHero = async (req,res)=>{
    try {
        const hero = await Hero.findById(req.params.id);
        if (hero) {
          await hero.updateOne({ $set: req.body });
          res.status(200).json("the hero has been updated");
        } else {
          res.status(403).json("hero not found");
        }
      } catch (err) {
        res.status(500).json(err);
      }
}
 const deleteHero = async(req,res)=>{
    try {
        const hero = await Hero.findById(req.params.id);
        if (hero) {
          await hero.deleteOne();
          res.status(200).json("the hero has been deleted");
        } else {
          res.status(404).json("hero not found");
        }
      } catch (err) {
        res.status(500).json(err);
      }
}
module.exports = {getHeroes,deleteHero,editHero,createHero,getHero}