var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  name: String,
  password: String
})


var User = mongoose.model('user', userSchema)
function find(req, res, err) {
  User.find(function (err, resutl) {
    console.log(resutl);
    res.json(resutl);
    //    return resutl;
  })
}

function findOne(req, res, err) {
  User.findOne(req.body,function (err, resutl) {
    console.log(resutl);
    res.json(resutl);
    //    return resutl;
  })
}

//增加一条信息
function save(req, res) {
  console.log(req.body);
  var user = new User(req.body);
  user.save(function (err, user) {
    if (err) return console.error(err);
    var resutl = {
      code: "success",
      info: "成功的新增了信息3"
    }
    res.json(resutl);
  });
}

/**
 * 删除所有信息
 * @param {*} req 
 * @param {*} res 
 */
function remove(req, res) {
  var id = req.body.id;
  User.remove({}, function (err) {
    var result;
    if (err) {
      result = err;
      console.log(err);
    } else {
      console.log('删除成功');
      resutl = {
        info: "删除成功"
      }
    }
    res.json(resutl);
  });
}

/**
 * 删除一条信息
 * @param {*} req 
 * @param {*} res 
 */
function removeOne(req, res) {
  var id = req.body.id;
  console.log(req.body)
  User.remove(req.body, function (err) {
    var result;
    if (err) {
      result = err;
      console.log(err);
    } else {
      console.log('删除成功');
      resutl = {
        info: "删除成功"
      }
    }
    res.json(resutl);
  });
}

/**
 * 修改一条消息
 * @param {*} req 
 * @param {*} res 
 */
function updata(req, res) {
  var conditions = { "name": req.body.name };
  var updates = { $set: { "name": req.body.changeName } };//将用户名更新为“tiny”  
  User.update(conditions, updates, function (error) {
    var resutl;
    if (error) {
      console.error(error);
       resutl = {
        info: "更新失败"
      }
    } else {
      console.error("更新用户名成功")
       resutl = {
        info: "更新成功"
      }
    }
      res.json(resutl);
  });


}

module.exports = {
  find: find,
  save: save,
  findOne:findOne,
  remove: remove,
  removeOne: removeOne,
  updata: updata,
};