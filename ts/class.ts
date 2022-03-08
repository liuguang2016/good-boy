/**
 * 抽象类
 * 抽象方法
 */
abstract class Animal {
  abstract breathe():void;
}

class Person extends Animal {
  constructor(public name: string) {
    super();
  }
  private _age: number = 0;
  protected sex: string = "男";
  static weight = 80;
  readonly write = '谢谢你好';
  get age(){
    return this._age = this._age + 8;
  }
  set age(age: number) {
    this._age = age + 3;
  }
  breathe() {
    console.log("人用鼻子呼吸")
  }
}

class Lady extends Person {
  constructor(public from: string) {
    super('Li liu');
  }

  public context = 'Hi,lady'
  public say=() => {
    return this.context+'good';
  }
}

class JieJie extends Lady {
  constructor(public height: number) {
    super('chengdu');
  }

  sayLove = () => {
    return 'I love you' + this.context;
  }
  sayHello = () => {
    return this.context + ',你好';
  }
}

const liJie = new JieJie(171);

liJie.say();
liJie.sayLove();
console.log(Person.weight, liJie.age,liJie.write);