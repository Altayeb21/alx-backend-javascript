export default class HolbertonCourse {
  static ensureStr(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  static ensureNumber(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  static ensureStrArr(value) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  }

  constructor(name, length, students) {
    HolbertonCourse.ensureStr(name);
    HolbertonCourse.ensureNumber(length);
    HolbertonCourse.ensureStrArr(students);
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    HolbertonCourse.ensureStr(value);
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    HolbertonCourse.ensureNumber(value);
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    HolbertonCourse.ensureStrArr(value);
    this._students = value;
  }
}
