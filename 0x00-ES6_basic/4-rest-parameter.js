export default function returnHowManyArguments(...argv) {
  let count = 0;
  while (argv[count] !== undefined) {
    count += 1;
  }
  return count;
}
