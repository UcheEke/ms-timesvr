/**
 * Created by ekeu on 20/12/16.
 */
'use strict';

let express = require('express');
let app = express();

app.get('/', function(req, res){
    res.send('Hello World!');
});
app.listen(8080);
