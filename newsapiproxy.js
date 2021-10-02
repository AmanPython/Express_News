const { default: axios } = require("axios");
var stringify = require('json-stringify-safe');
const util = require('util') // has no default export
//import { inspect } from 'util' // or directly
// or 
//var util = require('util')

const express = require("express");
const { json } = require("express");
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
module.exports = router;