const User = require('../model/User')
const bcrypt = require ("bcryptjs");
const jwt = require("jsonwebtoken")

exports.Signup  = async (req,res)=> {
    try{
        const {name,email,password}= req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
         return   res.status(401).json({
                success:false,
                message:"User is Already Exist"
            })
        }
        const hashPassword = await bcrypt.hash(password,10);
        // create User 
        const user = new User({name,email,password:hashPassword});
        await user.save();
        res.status(200).json({
            success:true,
            message:"User Created SuccessFully"
        })
    }catch(error){
        res.status(400).json({
            success:false,
            message:"Somethings Error into Signup Function"
        })
    }

}


exports.Login = async(req,res)=>{
   try{
     const {email,password}= req.body
    // check email is exist in database or not 
    const user = await User.findOne({email});
    if(!user){
      return  res.status(401).json({
            success:false,
            message:"Email is not inside the database"
        })
    }
    // compare password 
    const isMatch =  await bcrypt.compare(password,user.password);
    if(!isMatch){
     return   res.status(401).json({
            success:false,
            message:"Password is wrong"
        })
    }

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{ expiresIn: "1d" })
      res.status(200).json({
        status:true,
        message:"Login SuccessFully",
        token,
        user:{
            id:user._id,
            name:user.name,
            email:user.email
        }
      })
   }catch(error){
    res.status(400).json({
        success:false,
        message:"Somethings error inside the Login function"
    })
   }
}