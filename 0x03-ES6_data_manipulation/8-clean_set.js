export default function cleanSet(set, startString) {
  /* if (startString === '') {
    return '';
  } */
  let str = '';
  const cut = startString.length;
  for (const element of set) {
    if (element.startsWith(startString)) {
      str += `${element.slice(cut)}-`;
    }
  }
  return str.slice(0, -1);
}
