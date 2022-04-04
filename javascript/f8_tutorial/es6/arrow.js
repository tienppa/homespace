const course = {
  name: "javascript",
  getName: function () {
    return this; //context
  },
};
console.log(course.getName());

const newCourse = {
  name: "php",
  getName: () => {
    return this;
  },
};
console.log(newCourse.getName());

// constructor
const Course = function (name, price) {
  this.name = name;
  this.price = price;
};

var js = new Course("js", 200);
console.log(js);

// arrow function is not a constructor
const Animal = (name, price) => {
  this.name = name;
  this.price = price;
};
const cat = new Animal("cat", 200);
console.log(cat); //error
