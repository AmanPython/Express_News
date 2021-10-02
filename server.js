const express = require('express'); 
const cors = require('cors'); 

const app = express();
app.use(cors()); 


const { default: axios } = require("axios");
var stringify = require('json-stringify-safe');
const util = require('util') // has no default export
//import { inspect } from 'util' // or directly
// or 
//var util = require('util')

const router = express.Router();
router.get("/newsdata", (req,res)=>{
    axios("https://newsapi.org/v2/top-headlines?country=in&apiKey=f7db438fdcab4d568f1c4d357085ff7f")
    .then(data =>{
        var data0 = stringify(data, null,2);
        data0 = JSON.parse(data0);
        res.send(data0.data);
    
    });
    
        // this.setState({ data: data.articles, loading: false }, ()=>
        //     console.log(data.articles)
    })



app.use(express.json({extended: false}));
app.use('/api/newsapiproxy', require('./newsapiproxy'))
const Port = process.env.Port || 3017;
app.listen(Port, () => console.log("Server has been started"));


//http://localhost:3017/api/newsapiproxy/newsdata/