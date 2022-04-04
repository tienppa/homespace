// IIFE :
// limit global variable, run now, private
(function ([...rest]) {
  var result = rest.filter((item) => {
    return item % 2 == 0;
  });
  console.log(result);
})([1, 2, 3, 4]);

var i = 0;
(function myFunc() {
  i++;
  console.log(i);
  if (i < 10) {
    myFunc();
  }
})();

const app = {
  cars: [],
  add(car) {
    this.cars.push(car);
  },
  edit(car) {
    this.cars[index] = car;
  },
  remove(index) {
    this.cars.splice(index, 1);
  },
};

const newApp = (function () {
  // private
  const cars = ["Honda"];

  return {
    get(index) {
      return cars[index];
    },
    getAll() {
      return cars.toString();
    },
    add(car) {
      cars.push(car);
    },
    edit(car) {
      cars[index] = car;
    },
    remove(index) {
      cars.splice(index, 1);
    },
  };
})();

newApp.add("NWC");
console.log(newApp.getAll());

const arr = [1, 2, 3, 4, 5, 6, 7];
const result = arr.filter(function (item, index) {
  return item % 2 == 0;
});
