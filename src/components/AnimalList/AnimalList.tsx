import { useState } from "react";

export default function AnimalList() {
	const [animals, setAnimals] = useState<string[]>(["gorilla", "giraff"]);
	const [inputAnimal, setInputAnimal] = useState("");

	const handleClick = () => {
		// när vi klickar på knappen ska vi lägga till ett djur till arrayen
		// vi får inte göra så här -> animals.push(inputAnimal);
		setAnimals([...animals, inputAnimal]);
	};

	return (
		<>
			<h1>Animal List</h1>
			<input
				type="text"
				placeholder="Animal..."
				value={inputAnimal}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setInputAnimal(e.target.value);
				}}
			/>
			<button onClick={handleClick}>Add Animal</button>
			<ul>
				{animals.map((animal) => (
					<li key={animal}>{animal}</li>
				))}
			</ul>
		</>
	);
}
