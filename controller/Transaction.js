const express = require('express');
const Transaction = require('../model/Transaction');

exports.createTransaction =    async(req,res)=>{
    // req is conains client body request , params , query
    // res used to send the response back to the client.
   try{
    // Creates a new instance of the Transaction  what we define in the model
 const transaction = new Transaction (req.body);
//  then transaction becomes a new object with those values, ready to save in MongoDB.
 await transaction.save();
 res.status(201).json(transaction,"Success");
   }catch(error){
    console.log(error);
   }
}
   
exports.getTransactions =    async(req,res)=>{
   try{
   const transactions = await Transaction.find();
   res.status(200).json({message:"Success"},transactions)
   }catch(error){
    console.log(error);
   }
}





