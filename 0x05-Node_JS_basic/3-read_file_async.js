const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    let numberOfStudents = 0;
    const dataDict = {};
    const keyList = [];
    let dataArray = data.toString('utf8').trim().split('\n');
    if (dataArray.length > 1) {
      dataArray = dataArray.slice(1);
    }
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
        keyList[keyList.length] = student[3];
        dataDict[student[3]] = [];
        dataDict[student[3]][0] = 1;
        dataDict[student[3]][1] = [];
        dataDict[student[3]][1][0] = student[0];
      }
    }
    console.log(`Number of students: ${numberOfStudents}`);
    for (const key of keyList) {
      console.log(`Number of students in ${key}: ${dataDict[key][0]}. List: ${dataDict[key][1].join(', ')}`);
    }
    /* eslint-enable prefer-destructuring */
    /* eslint-enable guard-for-in */
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
