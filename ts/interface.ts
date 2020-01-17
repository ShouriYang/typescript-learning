//对象类型
interface Person {
  readonly id: number;
  name: string;
  age: number;
  sex?: string;
}
const p1: Person = {
  id: 1,
  name: 'damu',
  age: 11,
  sex: '女'
};
//函数类型
interface searchFunc {
  (source: string, subString: string): boolean;
}
let mysearch: searchFunc;
mysearch = function(source: string, subString: string) {
  let flag = source.search(subString);
  return flag > -1;
};
console.log(mysearch('杨啸锐', '杨'));
