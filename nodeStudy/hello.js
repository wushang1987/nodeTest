function hello (){
    var name;
    this.setName = function (tyName){
        name = tyName;
    }
    this.sayHello = function (){
        console.log(name + "hello");
    }
}
module.exports = hello;