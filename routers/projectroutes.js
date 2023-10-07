const multer = require('multer')
const path = require("path")
const {createProject, editProject, deleteProject, getProjects } = require('../controllers/ProjectsController');
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
})
const upload = multer({
    storage:storage
})
const route = require('express').Router();
route.get('/',getProjects);
route.post('/',upload.single('image'),createProject);
route.put('/:id',editProject);
route.delete('/:id',deleteProject)
module.exports = route