const express = require('express');
const app = express();
const port = 3000

const dotenv = require("dotenv");
dotenv.config();
const db = require('./Config/database');
db.connect();



app.use(express.json());
const transaction = require('./routes/transaction');
app.use('/api',transaction);



app.get('/', (req,res)=>{
    res.send("Hii Backend")
})
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});