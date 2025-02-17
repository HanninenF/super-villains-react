import InputDemo from "./components/InputDemo/InputDemo";
import "./App.scss";
import FilterableProductTable from "./components/FilterableProductTable/FilterableProductTable";
import PersonCard from "./components/PersonCard/PersonCard";
import AnimalList from "./components/AnimalList/AnimalList";

const PRODUCTS = [
	{ category: "Fruits", price: "$1", stocked: true, name: "Apple" },
	{ category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
	{ category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
	{ category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
	{ category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
	{ category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
	return (
		<>
			<h1>🦹 super-villains-react 🦹</h1>
			<p>a demo for students of React</p>
			{/* <InputDemo />
			<FilterableProductTable products={PRODUCTS} /> 
			<PersonCard />*/}
			<AnimalList />
		</>
	);
}

export default App;
