const getTotal = (num1:number,num2:number):number => {
  return num1 + num2;
}

const total = getTotal(1, 2);

const sayHello = ():void => {
  console.log("hello word");
}

//执行被阻塞

const errorFunction = ():never => {
  throw new Error();
  console.log("你好");
}

const forNever = (): never => {
  while (true) { };
  console.log("good boy");
}

const add = ({ num1, num2 }:{ num1:number, num2:number }) => {
  return num1 + num2;
}

const result = add({ num1:1, num2:2});