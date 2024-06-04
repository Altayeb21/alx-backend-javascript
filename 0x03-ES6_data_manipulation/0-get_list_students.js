
export default function getListStudents() {
	
	let list = [];
	let ob1 = {id: 1, name: "Guillaume", location: "San Francisco"};
	let ob2 = {id: 2, name: "James", location: "Columbia"};
	let ob3 = {id: 5, name: "Serena", location: "San Francisco"};
	list.push(ob1, ob2, ob3);
	return list;
}
