const { User, validate } = require("../models/User");
const bcrypt = require('bcrypt')
const joi = require('joi')

const register= async(req,res)=>{
try {
 const {error} = validate(req.body);
 console.log(error)
 if(error){
    return res.status(400).send({message:error.details[0].message});
 }
 const user = await User.findOne({email:req.body.email});
 if(user){
    return res.status(409).send({message:"User with given email already exists"})
 }
   
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password,salt);
    await new User({...req.body,password:hashPassword}).save();
    res.status(201).send({message:"User created successfully"})
} catch (err) {
    console.log(err)
    // res.status(500).json(err)


}
 }
 const login= async(req,res)=>{
    try {
     const {error} = validate2(req.body);
     if(error) return res.status(400).send({message:error.details[0].message});
     const user = await User.findOne({email:req.body.email});
     if(!user)
        return res.status(401).send({message:"Invalid email or password"})
       const validPassword = await bcrypt.compare(req.body.password,user.password);
       if(!validPassword) return res.status(401).send({message:"Invalid email or password"});
       const token = user.generateAuthToken();
       res.status(200).send({data:token,message:"Logged in successfully"})
    } catch (err) {
        res.status(500).send({message:"Internal Server Error"})
    
    
    }
     }
     const validate2 = (data)=>{
        const schema = joi.object({
          
            email:joi.string().email().required().label("Email"),
            password:joi.string().required().label("Password")
        })
        return schema.validate(data)
    }
module.exports = {register,login}