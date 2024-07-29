export default function getListStidentIds(objArr) {
  if (!Array.isArray(objArr)) {
    return [];
  }
  const arr = objArr.map((item) => item.id);
  return arr;
}
