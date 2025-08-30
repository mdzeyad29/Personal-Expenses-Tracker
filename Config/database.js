const mongoose = require('mongoose')

exports.connects = ()=>{
mongoose.connect(process.env.MONGODBURL,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
})
.then(()=>console.log("Database Connected"))
.catch(err=>console.log(err))
}


