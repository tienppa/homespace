var array1 = ["Javascript", "PHP", "Ruby"]
var array2 = ["ReactJS", "Dart"]

// toán tử spread (...) giống concat nối mảng
var array3 = [...array1, ...array2]
console.log(array3)

// hợp nhất 2 object
var object1 = {
    name: "Javascript"
}
var object2 = {
    price: 1000,
    desc: "description"
}
var object3 = {
    ...object1,
    ...object2
}
var object4 = {
    ...object1,
    ...object2,
    desc: "description has changed"
}
console.log(object3)
console.log(object4)

// Ví dụ truyền tham số cho hàm
var array = ["Javascript", "PHP", "Ruby"]
function logger(a, b, c) {
    console.log(a, b, c)
}
logger(...array)

// Phần biệt truyền đối số là dùng spread
// Còn rest dùng để định nghĩa tham số, dùng với destructuring