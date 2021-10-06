const express = require('express'); 
const cors = require('cors'); 

const app = express();
app.use(cors()); 


app.use(express.json({extended: false}));
app.use('/api/newsapiproxy', require('./newsapiproxy'))
const Port = process.env.Port || 3017;
app.listen(Port, () => console.log("Server has been started"));


//http://localhost:3017/api/newsapiproxy/newsdata/

//http://localhost:3017/api/newsapiproxy/newsdata/
