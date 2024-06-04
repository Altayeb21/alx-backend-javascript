export default function getStudentByLocation(arr, city) {
  if (!Array.isArray(arr)) {
    return [];
  }

  let filterdArray = [];
  filterdArray = [...arr].filter((ob) => ob.location === city);
  return filterdArray;
}
