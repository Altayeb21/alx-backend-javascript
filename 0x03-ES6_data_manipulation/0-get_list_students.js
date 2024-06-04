export default function getListStudents() {
  const list = [];
  const ob1 = { id: 1, firstname: 'Guillaume', location: 'San Francisco' };
  const ob2 = { id: 2, firstname: 'James', location: 'Columbia' };
  const ob3 = { id: 5, firstname: 'Serena', location: 'San Francisco' };
  list.push(ob1, ob2, ob3);
  return list;
}
