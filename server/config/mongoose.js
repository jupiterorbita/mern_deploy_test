// 1. import mongoose 
const mongoose = require("mongoose");
const DB = "w3d2_full_MERN";

// 2. connect mongoose to MongoDB
mongoose.connect("mongodb://localhost/" + DB,{
    useNewUrlParser: true,
	useUnifiedTopology: true,
    useFindAndModify: false //future error message
})
.then( ()=> console.log(`DB connected at ${DB}`))
.catch( (err)=> console.log("something err ", err))