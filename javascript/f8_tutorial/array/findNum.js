var array = [1, 2, 3, 4, 6, 7];

// array.sort(function (a, b) {
//   return b - a;
// });

// console.log("max :", array[0]);
// console.log("min :", array[array.length - 1]);

function findMax(array) {
  var flag = array[0];
  for (let index = 0; index < array.length; index++) {
    if (array[index] < flag) {
      flag = array[index];
    }
  }
  return `Max : ${flag}`;
}
console.log(findMax(array));

function joinWithCharacter(array, charactor) {
  return array.join(charactor);
}
// Ví dụ khi sử dụng
var cars = ["Honda", "Mazda", "Mercedes"];
var result = joinWithCharacter(cars, " - ");
console.log(result); // Expected: "Honda - Mazda - Mercedes"
