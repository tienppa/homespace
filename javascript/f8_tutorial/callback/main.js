var courses = ["Javascript", "PHP"];

// Using to avoid empty element
for (var index of courses) {
  console.log(index);
}

// forEach
courses.forEach(function (course, index, array) {
  console.log(course, index, array);
});

// map
var result = courses.map(function (course, index) {
  return course;
});
