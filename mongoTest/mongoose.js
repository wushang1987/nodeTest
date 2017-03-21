var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log(callback);
  // yay!
});

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
var Kitten = mongoose.model('Kitten', kittySchema)
var fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak() // "Meow name is fluffy"

//增加一条信息
fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
});

//查询操作
Kitten.find(function(err,resutl){
    console.log(resutl)
})
