export default function createIteratorObject(report) {
  const all = report.allEmployees;
  const lst = [];
  for (const employees in all) {
    if (Object.hasOwnProperty.call(all, employees)) {
      lst.push(...all[employees]);
    }
  }
  return lst;
}
