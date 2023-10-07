const multer = require('multer')
const path = require("path")
const {createService, editService, deleteService, getServices } = require('../controllers/ServicesController');
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
route.get('/',getServices);
route.post('/',upload.single('logo'),createService);
route.put('/:id',editService);
route.delete('/:id',deleteService)
module.exports = route