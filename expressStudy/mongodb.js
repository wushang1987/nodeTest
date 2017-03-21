var db = require('mongoskin').db('localhost:27017/test');
var ddc = db.collection('col').find({},function(err,result){
  console.log(err);
  console.log(result);
});
console.log(ddc)
