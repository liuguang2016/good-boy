/**
 * 泛型
 */
const join = <T>(first: T, second: T) => {
  return `${first}${second}`;
};

join<number>(1, 2);

/**
 *
 * @param params 数组
 * @returns
 */
const revert = <T>(params: T[]) => {
  return params.reverse();
};

revert<string>(["12", "34"]);

/**
 * 多个泛型
 */
const multiple = <T, P>(first: T, second: P) => {
  return `${first}${second}`;
};

multiple<string, number>("1", 2);

/**
 * class中使用泛型
 */

interface Girl {
  name: string;
}

class SelectGirl<T extends Girl> {
  constructor(private girls: T[]) {}
  getGirl(index: number): string {
    return this.girls[index].name;
  }
}

const selectGirl = new SelectGirl<Girl>([{ name: "红姐" }, { name: "小南京" }, { name: "小湖南" }]);

const girl = selectGirl.getGirl(0);
console.log(girl);

/**
 * 泛型约束
 */
const look = <T extends string | number>(param) => {
  console.log(param);
};

look<number>(1);
