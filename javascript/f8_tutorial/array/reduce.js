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

// Sum total coin
// var total = 0;
// for (let i = 0; i < courses.length; i++) {
//   total += Number.parseInt(courses[i].coin);
// }
// for (var course of courses) {
//   total += course.coin;
// }
// console.log(total);

var sum = courses.reduce(function (accumulator, currentValue) {
  return (accumulator += currentValue.coin);
}, 0);

console.log(sum);

// Example 2
// Initial value is optional value,
var numbers = [122, 355, 534, 5435];
var total = numbers.reduce(function (total, element) {
  return total + element;
});

console.log(total);

//  Example 3
// Flat - làm phẳng mảng
var array = [1, 2, [4, 5], 5, 6, [9, 6]];
var flat = array.reduce(function (output, item) {
  return output.concat(item);
}, []);
console.log(flat);

// Example 4
var topics = [
  {
    topic: "Front-end",
    courses: [
      {
        id: 1,
        title: "CSS",
      },
      {
        id: 1,
        title: "HTML",
      },
      {
        id: 1,
        title: "JS",
      },
    ],
  },
  {
    topic: "Back-end",
    courses: [
      {
        id: 1,
        title: "CSS",
      },
      {
        id: 1,
        title: "HTML",
      },
      {
        id: 1,
        title: "JS",
      },
    ],
  },
];

var out = topics.reduce(function (init, element) {
  return init.concat(element.courses);
}, []);
console.log(out);

var elements = [1, 2, 4, 5, 6];
var total = elements.reduce(function (total, value) {
  return total + value;
}, 10);
console.log(total);
