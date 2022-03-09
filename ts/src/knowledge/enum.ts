enum Status {
  ONE,
  TWO,
  THREE,
}

const getServe = (status: number) => {
  let result: string;
  switch (status) {
    case 0:
      result = "欢迎光临";
      break;
    case 1:
      result = "二楼雅间，4位";
      break;
    case 2:
      result = "好酒好菜上齐";
      break;
    default:
      result = "谢谢惠顾";
      break;
  }
  console.log("客官，" + result);
};

getServe(Status.ONE);
