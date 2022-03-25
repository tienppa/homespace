// Định nghĩa key: value cho object
// Định nghĩa method cho object
// Định nghĩa key cho object duoi dang method

//  Cách thông thường
var name = "Javascript";
var price = 1000;
var course = {
    name: name,
    price: price
}

// Định nghĩa key: value cho object
// Định nghĩa method cho object
var course_val = {
    name,
    price,
    getName() {
        return name;
    }
}
console.log(course_val)
console.log(course_val.getName())

// Định nghĩa key cho object duoi dang method
var fieldName = "name"
var fieldPrice = "price"
const courseThird = {
    [fieldName]: "Javascript",
    [fieldPrice]: 1000
}
console.log(courseThird)