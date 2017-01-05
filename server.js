/**
 * Created by ekeu on 20/12/16.
 */
'use strict';

let express = require('express');
let app = express();

let errDateFormat = function(){
    let output = {};
    output['natural'] = null;
    output['unix'] = null;
    return output;
};

let formatOutput = function(strTime){
    let output = {};
    let t = Date.parse(strTime);
    if(Number.isNaN(t)){
       let n = parseInt(strTime);
       if (Number.isNaN(n)){
           return errDateFormat();
       } else {
           output['unix'] = n;
           output['natural'] = new Date(n).toDateString();
       }
    } else {
        output['natural'] = strTime;
        output['unix'] = t;
    }
    return output;
};

app.get('/', function(req, res){
    res.send('Time server Microservice');
});

app.get('/hello', function(req, res){
    res.send('Welcome to my first Heroku deployment!');
});

app.get('/:time', function(req, res){
    let time = req.params.time; // string
    console.log("Time passed into request:", time);
    let output = formatOutput(time);
    res.send(output);
});

// Listen for incoming requests and serve them.
app.listen(process.env.PORT || 3000);
