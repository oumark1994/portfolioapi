const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const heroRoute =require('./routers/heroroutes')
const contactRoute =require('./routers/contactroutes')
const skillsroutes =require('./routers/skillroutes')
const testimonialsRoute =require('./routers/testimonialsroutes')
const footerRoute =require('./routers/footerroutes')
const projectsRoute =require('./routers/projectroutes')
const servicesRoute =require('./routers/serviceroutes')
const userRoute =require('./routers/userroutes')




// const userRoute =require('./routes/users.js')
// const authRoute =require('./routes/auth.js')
// const postRoute =require('./routes/posts.js')
dotenv.config();
mongoose.connect(process.env.MONGO_URL)
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback () {
console.log("connected to db");
});


const app = express();
app.use(express.json());
app.use(express.static('public'))
app.use(helmet());
app.use(morgan("common"));
app.use(cors({
    origin:[],
    methods:["POST", "GET"],
    credentials:true
}))

app.use("/api/heroes",heroRoute);
app.use("/api/contact",contactRoute);
app.use("/api/footer",footerRoute);
app.use("/api/testimonials",testimonialsRoute);
app.use("/api/projects",projectsRoute);
app.use("/api/services",servicesRoute);
app.use("/api/skills",skillsroutes);
app.use("/api/users",userRoute);



app.listen(8800,()=>{
    console.log("Backend server is running!");
})
