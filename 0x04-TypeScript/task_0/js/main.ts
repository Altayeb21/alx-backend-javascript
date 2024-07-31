interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const st1 : Student = {
    firstName: 'bakka',
    lastName: 'saleem',
    age: 25,
    location: 'cairo',
};
const st2 : Student = {
    firstName: 'tom',
    lastName: 'saleem',
    age: 65,
    location: 'cairo',
};
const studentsList : Array<Student> = [st1, st2];
