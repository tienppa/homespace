var courses = [
  {
    id: 1,
    name: "Javascript",
    coin: 26,
  },
  {
    id: 2,
    name: "Javascript",
    coin: 260,
  },
  {
    id: 3,
    name: "Javascript",
    coin: 260,
  },
  {
    id: 4,
    name: "Javascript",
    coin: 260,
  },
  {
    id: 5,
    name: "Javascript",
    coin: 0,
  },
];

var newCourse = courses.map(function (course, index) {
  return course.coin;
});

var arr = [...courses];
console.log(arr);

var total = courses.reduce(function (accumulator, currentValue, currentIndex) {
  return (accumulator += currentValue.coin);
}, 0);
console.log(total);

var sum = courses.reduce((sum, currentValue) => {
  return (sum += currentValue.coin);
}, 0);
console.log(sum);

function logger() {
  console.log(log);
  let log = "hello";
}
logger();

var arr = [
  {
    name: "js",
    point: 100,
  },
  {
    name: "jsss",
    point: 1000,
  },
  {
    name: "jswfss",
    point: 100,
  },
];
var result = arr.find(function (element, index) {
  return element.point === 1000;
});
console.log(result);

var a = 100;
var b = 200;
var result = Object.assign(
  { name: "tien" },
  {
    a,
    b,
  }
);
console.log(result);
