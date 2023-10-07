
const route = require('express').Router();
const {createSkill, editSkill, deleteSkill, getSkills } = require('../controllers/SkillsController');
const multer = require('multer')
const path = require('path')

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
route.get('/',getSkills);
route.post('/',upload.single('logo'),createSkill);
route.put('/:id',editSkill);
route.delete('/:id',deleteSkill)
module.exports = route