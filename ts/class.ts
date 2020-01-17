class Xiaojiejie {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  say() {
    console.log('小哥哥好');
  }
}
let xiaojiejie: Xiaojiejie = new Xiaojiejie('杨幂', 18);
xiaojiejie.say();
console.log(xiaojiejie);
