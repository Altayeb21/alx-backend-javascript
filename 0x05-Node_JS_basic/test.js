const fs = require('fs');

const data = fs.readFileSync('database.csv', 'utf8');
console.log(typeof data)
const dataArray = data.split('\n');
console.log(dataArray);
