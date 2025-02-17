import { useState } from "react";

type Person = {
	name: string;
	age: number;
};

export default function PersonCard() {
	const [person, setPerson] = useState<Person>({ name: "", age: 0 });

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
				placeholder="write your name..."
				value={person.name}
				onChange={handleNameChange}
			/>
			<label htmlFor="personAge">Age: </label>
			<input
				type="text"
				id="personage"
				placeholder="write your age..."
				value={person.age}
				onChange={handleAgeChange}
			/>
		</>
	);
}
