const express = require('express');
const router = express.Router();
const Transaction = require('../model/Transaction');


//post handler 
// router.post('/addTransaction',
    
exports.createTransaction =    async(req,res)=>{
    try{
 const transaction = new Transaction(req.body)
     await transaction.save();
     res.status(200).json(transaction);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}
   
// )

// get handler 

// router.get('/getTransactions',

exports.getTransactions =    async(req,res)=>{
    try{
        const transactions = await Transaction.find();
        res.status(200).json(transactions);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
// )





