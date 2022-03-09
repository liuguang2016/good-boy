interface Waiter {
  isGirl: boolean;
  say: () => void;
}

interface Masseuse {
  isGirl: boolean;
  skill: () => void;
}

/**
 *
 * @param person 自定义类型保护
 * @returns boolean
 */
const isMasseuse = (person: unknown): person is Masseuse => {
  return Boolean((person as Masseuse).skill);
};

const who = (animal: Waiter | Masseuse) => {
  /**
   * in判断
   */
  if ("skill" in animal) {
    animal.skill();
  } else {
    animal.say();
  }

  /**
   * as 断言
   */
  if (animal.isGirl) {
    (animal as Masseuse).skill();
  } else {
    (animal as Waiter).say();
  }

  /**
   * is 类型保护
   */
  if (isMasseuse(animal)) {
    animal.skill();
  } else {
    animal.say();
  }
};

const Hen: Masseuse = {
  isGirl: true,
  skill: () => {
    console.log("这是个优秀的技师");
  },
};

who(Hen);
