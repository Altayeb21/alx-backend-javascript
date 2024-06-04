export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);
  const dv = new DataView(buffer);
  if (position > int8View.length - 1) {
    throw new Error('Position outside range');
  }
  int8View[position] = value;
  return dv;
}
