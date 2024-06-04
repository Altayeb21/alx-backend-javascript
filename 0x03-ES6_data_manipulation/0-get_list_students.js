
export default function getListStudents() {
	
	let list = [];
	let ob1 = {name: "Guillaume", id: 1, location: "San Francisco"};
	let ob2 = {name: "James", id: 2, location: "Columbia"};
	let ob3 = {name: "Serena", id: 5, location: "San Francisco"};
	list.push(ob1, ob2, ob3);
	return list;
}
