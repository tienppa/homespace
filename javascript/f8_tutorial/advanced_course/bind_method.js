this.firstName = "Minh";
this.lastName = "Thu";

const student = {
  firstName: "Minh",
  lastName: "Thao",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(student.getFullName());

const getStudentName1 = student.getFullName;
console.log(getStudentName1());

const getStudentName2 = student.getFullName.bind(student);
console.log(getStudentName2());
