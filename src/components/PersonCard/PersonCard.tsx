import { useState } from "react";

type Person = {
	name: string;
	age: number;
};

export default function PersonCard() {
	const [person, setPerson] = useState<Person>({ name: "", age: 0 });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setPerson({ ...person, [name]: value });
	};

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// vi får inte göra så här: person.name = e.target.value;
		setPerson({ ...person, name: e.target.value });
	};

	const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPerson({ ...person, age: Number(e.target.value) });
	};

	return (
		<>
			<h2>PersonCard-component</h2>
			<ul>
				<li>Name: {person.name}</li>
				<li>Age: {person.age}</li>
			</ul>
			<label htmlFor="personName">Name: </label>
			<input
				type="text"
				id="personname"
				name="name"
				placeholder="write your name..."
				value={person.name}
				onChange={handleChange}
			/>
			<label htmlFor="personAge">Age: </label>
			<input
				type="text"
				id="personage"
				name="age"
				placeholder="write your age..."
				value={person.age}
				onChange={handleChange}
			/>
		</>
	);
}
