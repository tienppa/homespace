var courses = ["javascript", "java", "php"];
console.log(courses.slice(0));
console.log(courses);

for (var key of courses) {
  console.log(key);
}
console.log(Array.isArray(courses));

courses.forEach(function (item, index) {
  console.log(item, index);
});

// every
var courses = ["javascript", "java", "php"];
var flag = courses.every(function (item, index, arr) {
  console.log(index);
  return item == "java";
});
console.log(flag);

// some
var courses = ["javascript", "java", "php"];
var flag = courses.some(function (item, index, arr) {
  console.log(index);
  return item == "java";
});
console.log(flag);

// filter
var courses = ["javascript", "java", "php"];
var flag = courses.filter(function (item, index, arr) {
  console.log(index, arr);
  return item == "java";
});
console.log(flag);

// find
var flag = courses.find(function (item, index, arr) {
  console.log(index, arr);
  return item == "java";
});
console.log(flag);

// find
var courses = [1, 3, 4, 5, 6];
var flag = courses.reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  arr
) {
  console.table({
    accumulator: accumulator,
    currentValue: currentValue,
    currentIndex: currentIndex,
  });
  return (accumulator = accumulator + accumulator);
});

console.log(flag);

// map
var courses = ["javascript", "java", "php"];
var html = courses.map(function (item, index) {
  return `<li>${item}</li>`;
});
var ulElement = document.querySelector("ul");
ulElement.innerHTML = html.join("");

var courses = ["javascript", "java", "php"];
courses.length = 10;
// courses.forEach(function (item, index) {
//   console.log(index, item);
// });
