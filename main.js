"use strict";

var students = [];
var students2 = students.map(function (actualItem) {
  actualItem = {
    name: actualItem,
    grade: grade
  };
  return actualItem;
});
students2.push({
  name: "Lucas",
  grade: 78
});
students2.push({
  name: "Eduardo",
  grade: 79
});
students2.push({
  name: "Vizentin",
  grade: 83
});
students2.push({
  name: "Silva",
  grade: 60
});
students2.push({
  name: "Carlos",
  grade: 50
});
students2.push({
  name: "Juliana",
  grade: 54
});
function filterGradeBetterThan60(student) {
  return student.grade > 60;
}
var approvedStudents = students2.filter(filterGradeBetterThan60);
console.log(approvedStudents);