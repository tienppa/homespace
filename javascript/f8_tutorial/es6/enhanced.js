var name = "javascript";
var price = 1000;
var course = {
  name: name,
  price: price,
};

// enhanced object literals
var newCourse = {
  name,
  price,
  getName() {
    return name;
  },
  getPrice() {
    return price;
  },
};
console.log(newCourse.getName());
