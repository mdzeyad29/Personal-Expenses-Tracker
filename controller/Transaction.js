const express = require('express');
const Transaction = require('../model/Transaction');

    
exports.createTransaction =    async(req,res)=>{
   try{
 const transaction = new Transaction (req.body);
 await transaction.save();
 res.status(201).json(transaction);
   }catch(error){
    console.log(error);
   }
}
   
exports.getTransactions =    async(req,res)=>{
    try{
        const transactions = await Transaction.find();
        res.status(200).json(transactions);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}





