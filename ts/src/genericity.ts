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
