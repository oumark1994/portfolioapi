const Project = require("../models/Projects");

 const getProjects= async(req,res)=>{
try {
    const Projects =  await Project.find();
    if(Projects){
    res.status(200).json(Projects)
    }else{
        res.status(500).send("No Project found")
    }


} catch (err) {
    res.status(500).json(err);}


}
 const createProject = async (req,res)=>{
    const newProject = new Project({title:req.body.title,
      desc:req.body.desc,projectLink:req.body.projectLink,
      image:req.file.filename});
  try {
    const saveProject = await newProject.save();
    res.status(200).json(saveProject);
  } catch (err) {
    res.status(500).json(err);
  }
}
 const editProject = async (req,res)=>{
    try {
        const project = await Project.findById(req.params.id);
        if (project) {
          await project.updateOne({ $set: req.body });
          res.status(200).json("the Project has been updated");
        } else {
          res.status(403).json("Project not found");
        }
      } catch (err) {
        res.status(500).json(err);
      }
}
 const deleteProject = async(req,res)=>{
    try {
        const project = await Project.findById(req.params.id);
        if (project) {
          await project.deleteOne();
          res.status(200).json("the Project has been deleted");
        } else {
          res.status(404).json("Project not found");
        }
      } catch (err) {
        res.status(500).json(err);
      }
}
module.exports = {getProjects,deleteProject,editProject,createProject}