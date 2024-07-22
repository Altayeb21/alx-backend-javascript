export default function appendToEachArrayValue(array, appendString) {
  const arr = array;
  let idx = 0;
  for (const value of array) {
    arr[idx] = appendString + value;
    idx += 1;
  }

  return arr;
}
