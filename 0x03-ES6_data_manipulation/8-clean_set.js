export default function cleanSet(set, startString) {
  let str = '';
  const cut = startString.length;
  for (const element of set) {
    if (element[0] === startString[0] && element.startsWith(startString)) {
      str += `${element.slice(cut)}-`;
    }
  }
  return str.slice(0, -1);
}
