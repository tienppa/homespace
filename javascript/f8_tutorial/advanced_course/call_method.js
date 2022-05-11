const teacher = {
  name: "Thu",
  price: 1000,
};

const student = {
  name: "Tien",
  price: 1000,
  getName() {
    console.log(`${this.name} - ${this.price}`);
  },
};

student.getName.call(teacher);

// =============================================
function Animal(name, weight) {
  this.name = name;
  this.weight = weight;
}

function Dog(name, weight, legs) {
  Animal.call(this, name, weight);
  this.legs = legs;
}

const dog = new Dog("Hello", 66, 4);

console.log(dog);

// =============================================
function logger() {
  console.log(...arguments);
  Array.prototype.forEach.call(arguments, (item) => {
    console.log(item);
  });
}
logger(1, 2, 3, 4, 5);
