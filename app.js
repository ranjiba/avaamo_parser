var express = require('express');
var app = express();
const fetch = require('node-fetch');
const axios = require("axios");
const xml = require("xml-parse");


app.get('/', function (req, res) {
    res.send("<h1>Welcome to Avaamo Doc Parser!</h1><a href='/analyse'>Analyse Doc</a>");
});
app.get('/analyse', function (req, res) {  
    fetch('http://norvig.com/big.txt')
    .then(res => res.text())
    .then(async (text) =>{      
        

        const wordlist = {}
        const res = await axios.get('https://dictionary.yandex.net/api/v1/dicservice.json/lookup', 
        { params: 
            {
                 key: 'dict.1.1.20210216T114936Z.e4989dccd61b9626.373cddfbfb8a3b2ff30a03392b4e0b076f14cff9',
                 lang:'en-ru',
                 text:'time'
         }
        });
        var parsedXML = xml.parse(res);
        console.log(parsedXML);
 
        //console.log(res)

    }) 

res.json(wordlist)

});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
