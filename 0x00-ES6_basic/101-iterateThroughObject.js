export default function iterateThroughObject(reportWithIterator) {
  let all = '';
  for (const employee of reportWithIterator) {
    all += `${employee} | `;
  }
  all = all.slice(0, -3);
  return all;
}
