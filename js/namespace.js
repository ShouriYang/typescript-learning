"use strict";
var shuaiGe;
(function (shuaiGe) {
    var Dehua = /** @class */ (function () {
        function Dehua() {
            this.name = '德华';
        }
        Dehua.prototype.talk = function () {
            console.log('我是帅哥刘德华');
        };
        return Dehua;
    }());
    shuaiGe.Dehua = Dehua;
})(shuaiGe || (shuaiGe = {}));
var baJie;
(function (baJie) {
    var Dehua = /** @class */ (function () {
        function Dehua() {
            this.name = '德华';
        }
        Dehua.prototype.talk = function () {
            console.log('我是帅哥马德华');
        };
        return Dehua;
    }());
    baJie.Dehua = Dehua;
})(baJie || (baJie = {}));
var dehua1 = new shuaiGe.Dehua();
var dehua2 = new baJie.Dehua();
dehua1.talk();
dehua2.talk();
