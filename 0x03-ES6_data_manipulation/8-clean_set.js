export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') {
    return '';
  }
  let str = '';
  const cut = startString.length;
  for (const element of set) {
    if (typeof element === 'string') {
      if (element[0] === startString[0] && element.startsWith(startString)) {
        const tmp = element.slice(cut);
        if (tmp !== '') {
          str += `${element.slice(cut)}-`;
        }
      }
    }
  }
  return str.slice(0, -1);
}
