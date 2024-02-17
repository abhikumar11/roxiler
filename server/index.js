const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
const connectDb = require('./config/DbConnection');

const app = express();
const port=3001;

connectDb();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(require("./routes"));

app.listen(port,()=>{
    console.log("listening on port:",port);
})