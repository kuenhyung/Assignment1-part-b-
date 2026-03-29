const Person = require('./person');

class Student extends Person {
  constructor(name, email, studentId) {
    super(name, email);
    this.studentId = studentId;
  }
}

module.exports = Student;