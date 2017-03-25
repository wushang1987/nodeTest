var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express 学习网' });
  res.sendfile('views/index.html');
});

/**
 * 路由模块
 */
module.exports = router;
