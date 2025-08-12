const mongoose = require('mongoose')
const connect = async()=>{
}
exports.connect = ()=>{
mongoose.connect(process.env.MONGODBURL,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
})
.then(()=>console.log("Database Connected"))
.catch(err=>console.log(err))
}


