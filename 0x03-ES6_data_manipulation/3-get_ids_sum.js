export default function getStudentIdsSum(objArr) {
  return objArr.reduce((accu, current) => accu + current.id, 0);
}
