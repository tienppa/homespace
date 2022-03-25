var array = ["Javascript", "PHP", "Ruby"]
var a = array[0]
var b = array[1]
var c = array[2]
console.log(a, b, c)

// destructuring - phân rã(cách lấy dữ liệu trong array và object)
var [a1, b1, c1] = array
console.log(a1, b1, c1)


// rest parameters - lấy ra phần còn lại
var [a2, ...rest] = array
console.log(rest)

// dùng với object
// phải gọi đúng tên do object có key và value
var course = {
    name: "JavaScript",
    price: 1000,
    children: {
        name: "ReactJS"
    }
}
var {name, price} = course
var {name, ...rest} = course

 //cách tạo ra object mới xóa đi name
 var {name, ...newObj} = course



console.log(name, price)
console.log(rest)
console.log(newObj)

//cách lấy ra con của children
//đổi tên name để tránh bị ghi đè, đổi name ngoài hoặc trong đều được
var {name: parentName, children: {name}} = course
console.log(name)

// lấy ra cái không có
var {desc = "desc value"} = course
console.log(desc)

// toán tử rest dùng trong function trả về array
//lấy ra phần còn lại
function logger(a, ...params) {
    console.log(params)
}
console.log(logger(1,2,3,4,5,6,7))

//destructuring trong function
function loggers({name, desc, ...rest}) {
    console.log(name)
    console.log(desc)
    console.log(rest)
}
loggers({
    name: "Hieu",
    desc: "description",
    note: "note"
})