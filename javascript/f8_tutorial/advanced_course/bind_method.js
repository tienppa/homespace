// bind() cho phép ràng buộc this cho một phương thức function
// Phương thức bind() trả về một hàm mới
// Có thể nhận các đối số như hàm ban đầu
this.firstName = "Minh";
this.lastName = "Thu";

const student = {
  firstName: "Minh",
  lastName: "Thao",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(student.getFullName()); //Minh Thao

const getStudentName1 = student.getFullName;
console.log(getStudentName1()); //Minh Thu

const getStudentName2 = student.getFullName.bind(student);
console.log(getStudentName2()); //Minh Thao
