const express = require('express');
const router = express.Router();
// signup and login routes 
const {Signup, Login} = require('../controller/auth')
router.post('/signup',Signup);
router.post('/login',Login)

module.exports = router