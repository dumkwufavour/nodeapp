//@https://github.com/dumkwufavour
//importing modules

const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectdb = require("./config/dbConnection");
const dotenv = require("dotenv").config();


connectdb();
const app = express();

app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use(errorHandler)

const port = process.env.PORT || 5000;

app.listen(port, ()=> {
    console.log(`Server runnning on port ${port}`);
})