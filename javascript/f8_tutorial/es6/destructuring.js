var courses = {
  name: "js",
  price: 100,
  desc: "javascript",
  children: {
    name: "React",
    price: 10000,
  },
};
var {
  name,
  price,
  desc,
  children: { name: childrenName },
} = courses;
console.log(name, childrenName);
