export default function getStudentByLocation(objArr, city) {
  const arr = objArr.filter((item) => item.location === city);
  return arr;
}
