// let a = [1, 1, {a:"22"},{a:{j:[2]}}];

// const deepClone = (param) => {
//   if (param === null) {
//     return null;
//   }
//   if (isArray(param)) {
//     return [...param];
//   }
//   const isObject = typeof param === "object";
//   if (type) {
//     for (let key in param) {
//       deepClone(param[key]);
//     }
//   } else {
//     return param;
//   }
  
// }

new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
  }, 20);
  setTimeout(() => {
    console.log(8);
  }, 10);
  resolve();
})
  .then(() => {
    console.log(3);
  })
  .then(() => {
    return new Promise((resolve, reject) => {
      console.log(4);
    }).then(() => {
      console.log(5);
    });
  })
  .then(() => {
    console.log(6);
  });

console.log(7);

1, 7 ,3,4, 6, 5, 8,2