const multer = require('multer')
const path = require("path")
const {createTestimonial, editTestimonial, deleteTestimonial, getTestimonials } = require('../controllers/TestimonialsController');
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
route.get('/',getTestimonials);
route.post('/',upload.single('image'),createTestimonial);
route.put('/:id',editTestimonial);
route.delete('/:id',deleteTestimonial)
module.exports = route