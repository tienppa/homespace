// declaration Function
function logger(log) {
    console.log(log)
}

// expression Function (anonymous function)
const logger2 = function(log) {
    console.log(log)
}

// arrow function
// Duoc them vao tu ES6
// Khong co context
// Khong dung de lam constructor duoc
const logger3 = (log) => {
    console.log(log)
}
const sum = (a, b) => {
    return a + b
}
const sum2 = (a, b) => a + b
const sum3 = (a, b) => ({a: a, b: b})

const logger4 = log => console.log(log)