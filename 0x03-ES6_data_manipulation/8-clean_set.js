export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let newString = '';
  for (const s of set) {
    if (s.startsWith(startString)) {
      newString += s.substring(startString.length);
      newString += '-';
    }
  }
  return newString.slice(0, -1);
}
