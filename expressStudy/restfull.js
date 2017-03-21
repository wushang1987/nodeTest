/**
 * 最简单的restfull 接口
 */

var express = require('express');
var http 　= require('http');

var restfullApp = express();

restfullApp.set('port', '3000')
restfullApp.post('/', function (req, res, next) {
    var dc = {
        dd: "dd",
        cc: 'cc',
    }
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.json(dc);
});


http.createServer(restfullApp).listen(3000);
