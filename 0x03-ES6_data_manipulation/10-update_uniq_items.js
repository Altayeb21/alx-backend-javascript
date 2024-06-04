export default function updateUniqeItems(mp) {
  if (!(mp instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [k, v] of mp) {
    if (v === 1) {
      mp.set(k, 100);
    }
  }
}
