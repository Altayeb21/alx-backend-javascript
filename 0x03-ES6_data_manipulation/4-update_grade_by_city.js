export default function updateStudentGradeByCity(objArr, city, newGrades) {
  let arr = objArr.filter((item) => item.location === city);
  arr = arr.map((item) => {
    const grade = newGrades.filter((itm) => itm.studentId === item.id);
    const obj = item;
    if (grade.length !== 0) {
      obj.grade = grade[0].grade;
    } else {
      obj.grade = 'N/A';
    }
    return obj;
  });
  return arr;
}
