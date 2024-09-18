const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    let numberOfStudents = 0;
    const dataDict = {};
    const dataArray = data.split('\n').slice(1);
    for (const chunk of dataArray) {
      const student = chunk.split(',');
      if (student.length < 4) {
        /* eslint-disable no-continue */
        continue;
        /* eslint-enable no-continue */
      }
      /* eslint-disable prefer-destructuring */
      /* eslint-disable guard-for-in */
      numberOfStudents += 1;
      if (student[3] in dataDict) {
        dataDict[student[3]][1][dataDict[student[3]][0]] = student[0];
        dataDict[student[3]][0] += 1;
      } else {
        dataDict[student[3]] = [];
        dataDict[student[3]][0] = 1;
        dataDict[student[3]][1] = [];
        dataDict[student[3]][1][0] = student[0];
      }
    }
    console.log(`Number of students: ${numberOfStudents}`);
    for (const key in dataDict) {
      process.stdout.write(`Number of students in ${key}: ${dataDict[key][0]}. List: `);
      for (const name of dataDict[key][1]) {
        if (name !== dataDict[key][1][dataDict[key][1].length - 1]) {
          process.stdout.write(`${name}, `);
        } else {
          process.stdout.write(`${name}\n`);
        }
      }
      /* eslint-enable prefer-destructuring */
      /* eslint-enable guard-for-in */
    }
  } catch (err) {
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;
