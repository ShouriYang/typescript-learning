"use strict";
var p1 = {
    id: 1,
    name: 'damu',
    age: 11,
    sex: '女'
};
var mysearch;
mysearch = function (source, subString) {
    var flag = source.search(subString);
    return flag > -1;
};
console.log(mysearch('杨啸锐', '杨'));
