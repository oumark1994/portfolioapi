const multer = require('multer')
const path = require("path")
const { getHeroes, createHero, editHero, deleteHero, getHero } = require('../controllers/HeroController');
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
route.get('/',getHeroes);
route.get('/:id',getHero);
route.post('/',upload.single('image'),createHero);
route.put('/:id',editHero);
route.delete('/:id',deleteHero)
module.exports = route