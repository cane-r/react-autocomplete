/**
 * The Server Can be configured and created here...
 * 
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/
const data      = require('./data');
const http      = require('http');
const port      = 3035;


///////////////extra libraries///////////////////////////////////
const url       = require('url');
const express     = require('express');
const cors        = require('cors');
////////////////////////////////////////////////



/** 
 * Start the Node Server Here...
 * 
 * The http.createServer() method creates a new server that listens at the specified port.  
 * The requestListener function (function (req, res)) is executed each time the server gets a request. 
 * The Request object 'req' represents the request to the server.
 * The ServerResponse object 'res' represents the writable stream back to the client.
 */
 var server = express();

 server.use(cors());

server.get('/search', function (req, res,next) {
   
//console.log("in search method");
 var requestUrl = url.parse(req.url,true);
 var queryString = requestUrl.query;
 var payload=searchByName(queryString.name);
// res.setHeader('Content-Type', 'application/json');
 //res.send(payload);
 res.json(payload);


});


server.get('/product/:productId', function (req, res,next) {
 var id=req.params.productId;
 console.log(id);
 var payload=searchById(id);
// res.setHeader('Content-Type', 'application/json');
 //res.send(payload);
 res.json(payload);


});





server.listen(port);

function searchByName(name){
    var products=[];
    for(var product in data){
        if(data[product].name.toLowerCase().indexOf(name.toLowerCase()) > -1){
         products.push(data[product]); 
        }
    }
    return products;

    
}

function searchById(id){
    var products=[];
    for(var product in data){
        if(data[product]._id===id){
         return data[product];
        }
    }
    
}