const express = require('express');
const router = express.Router();
const { createTransaction, getTransactions } = require('../controller/Transaction');

router.post('/addTransaction',createTransaction)

router.get('/getTransactions',getTransactions)

module.exports = router;