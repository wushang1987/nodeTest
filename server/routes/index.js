var express = require('express');
var path = require('path');
var router = express.Router();
var thing = require("../api/thing/thing");
var user = require("../api/user/user");

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express 学习网' });
  res.sendfile('views/index.html');
});
router.get('/thing', thing.find);
router.post('/thing',thing.save);
router.post('/removething',thing.remove);
router.post('/removeOneThing',thing.removeOne);
router.post('/updatething',thing.updata);

router.post("/user",user.save);
router.post("/userlogin",user.findOne);

/**
 * 路由模块
 */
module.exports = router;
