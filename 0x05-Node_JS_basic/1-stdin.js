const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log('Welcome to Holberton School, what is your name?');
if (process.stdin.isTTY) {
  rl.question('', (userName) => {
    console.log('Your name is:', userName);
    rl.close();
  });
} else {
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
  });
}
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
