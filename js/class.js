"use strict";
var Xiaojiejie = /** @class */ (function () {
    function Xiaojiejie(name, age) {
        this.name = name;
        this.age = age;
    }
    Xiaojiejie.prototype.say = function () {
        console.log('小哥哥好');
    };
    return Xiaojiejie;
}());
var xiaojiejie = new Xiaojiejie('杨幂', 18);
xiaojiejie.say();
console.log(xiaojiejie);
