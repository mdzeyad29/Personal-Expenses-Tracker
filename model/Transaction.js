const mongoose = require('mongoose');

const transactionModel = new mongoose.Schema({
    category :{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    }

})
module.exports = mongoose.model('transaction',transactionModel);