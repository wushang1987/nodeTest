var mongoose = require("mongoose");

var kittySchema = mongoose.Schema({
    name: String
})

// var Kitten = mongoose.model('Kitten', kittySchema)

// var silence = new Kitten({ name: 'Silence' })
// console.log(silence.name) // 'Silence'

kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name"
  console.log(greeting);
}
var Kitten = mongoose.model('Kitten2', kittySchema)
var fluffy = new Kitten({ name: 'fluffy' });
// fluffy.speak() // "Meow name is fluffy"

//增加一条信息
fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
});

function find(req,res,err){
      Kitten.find(function(err,resutl){
   console.log(resutl);
   res.json(resutl);
//    return resutl;
    })
}
module.exports = find;