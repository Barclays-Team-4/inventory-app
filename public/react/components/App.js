import React, { useState, useEffect } from "react";
import { Form } from "./Form.js";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
	const [items, setItems] = useState([]);
	const [currentItem, setCurrentItem] = useState(null);

	async function addItem(data) {
		const response = await fetch(`${apiURL}/items`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		const newItem = await response.json();
		setItems([...items, newItem]);
	}

	useEffect(() => {
		async function fetchItems() {
			try {
				const response = await fetch(`${apiURL}/items`);
				const itemsData = await response.json();

				setItems(itemsData);
			} catch (err) {
				console.log("Oh no an error! ", err);
			}
		}
		fetchItems();
	}, []);

	// SINGLE ITEM VIEW
	if (currentItem) {
		return (
			<>
				<h1>{currentItem.name}</h1>
				<button onClick={() => setCurrentItem(null)}>All Items</button>
			</>
		);
	}

	return (
		<main>
			<h1>Inventory App</h1>

			<ul>
				{items.map(item => (
					<li key={item.id}>
						<h2>
							<button onClick={() => setCurrentItem(item)}>{item.name}</button>
						</h2>
						<img src={item.image} alt="" />
					</li>
				))}
			</ul>

			<Form addItem={addItem} />
		</main>
	);
};
