export default function getStudentIdsSum(arr) {
  const sum = [...arr].reduce((accu, current) => accu + current.id, 0);
  return sum;
}
