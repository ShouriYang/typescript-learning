"use strict";
function search(age, stature) {
    if (age === void 0) { age = 18; }
    var yy = '';
    yy = '找到了' + age + '岁';
    if (stature !== undefined) {
        yy = yy + stature;
    }
    return yy + '的小姐姐';
}
var result = search();
console.log(result);
function buildGirl() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    return xuqiu.join(' ');
}
var girl = buildGirl('18', '岁', '可爱的小姐姐');
console.log(girl);
