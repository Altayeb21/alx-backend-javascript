export default function getListStudents(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  let idArray = [];
  idArray = [...arr].map((ob) => ob.id);
  return idArray;
}
