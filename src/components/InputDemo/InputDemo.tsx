import { useState } from "react";

export default function InputDemo() {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	return (
		<>
			<label htmlFor="inputDemo">Controlled component: </label>
			<input
				id="inputDemo"
				type="text"
				onChange={handleChange}
				value={inputValue}
				placeholder="Write somethings please..."
			/>

			<p>You wrote: {inputValue}</p>
		</>
	);
}
