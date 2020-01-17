function search(age: number = 18, stature?: string): string {
  let yy: string = '';
  yy = '找到了' + age + '岁';
  if (stature !== undefined) {
    yy = yy + stature;
  }
  return yy + '的小姐姐';
}
const result = search();
console.log(result);
function buildGirl(...xuqiu: string[]): string {
  return xuqiu.join(' ');
}
const girl = buildGirl('18', '岁', '可爱的小姐姐');
console.log(girl);
