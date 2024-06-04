export default function updateStudentGradeByCity(arr, city, grades) {
  const newarr = arr.filter((ob) => ob.location === city).map((ob) => {
    const ob2 = ob;
    for (const grade of grades) {
      if (ob2.id === grade.studentId) {
        ob2.grade = grade.grade;
        break;
      } else {
        ob2.grade = 'N/A';
      }
    }
    return ob2;
  });
  return newarr;
}
