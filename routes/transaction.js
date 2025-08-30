const express = require('express');
const router = express.Router();
const { createTransaction, getTransactions } = require('../controller/Transaction');

// Routes 
router.post('/transactions',createTransaction)
router.get('/transactions',getTransactions)

module.exports = router;