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

// loop in array
courses.forEach(function (course, index) {
  console.log(course);
});

// return boolean
courses.every(function (course, index) {
  return course.coin === 0;
});

// return boolean
var isFree = courses.some(function (course, index) {
  return course.coin === 0;
});
console.log(isFree);

//
var findCourse = courses.find(function (course) {
  return course.coin > 100;
});
console.log(findCourse);

// filter
var filter = courses.filter(function (course, index) {
  return course.coin > 50;
});
console.log(filter);
