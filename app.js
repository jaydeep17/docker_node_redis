'use strict';
var express = require('express');
var app = express();
var redis = require('redis');

var port = 3000;

var r = redis.createClient(process.env.DB_1_PORT_6379_TCP_PORT, process.env.DB_1_PORT_6379_TCP_ADDR);

app.get('/', function(req, res) {
    r.incr('key', function(err, value) {
        if (err) console.log(err);
        res.send('Hello World!' + value);
    });
});

var server = app.listen(port, function() {

    console.log('magic happens on port :', port)
});