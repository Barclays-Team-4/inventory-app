import React, { useState, useEffect } from "react";
import { Form } from "./Form.js";
import { UpdateForm } from "./updateForm.js";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
	const [items, setItems] = useState([]);
	const [currentItem, setCurrentItem] = useState(null);
	const [isFormShowing, setIsFormShowing] = useState(false);

	const [isUpdateFormShowing, setIsUpdateFormShowing] = useState(false);

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
		setIsFormShowing(false);
	}
	// update
	async function updateItem(id, data) {
		const response = await fetch(`${apiURL}/items/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (response.ok) {
			const updatedItem = await response.json();
			const index = items.findIndex(item => {
				if (item.id === id) {
					return true;
				} else {
					return false;
				}
			});
			const updatedItems = items.toSpliced(index, 1, updatedItem);
			setItems(updatedItems);
			setCurrentItem(null);
		}
	}

	function confirmDelete(id) {
		const confirmed = window.confirm("Are you sure you want to delete this item");

		if (confirmed) {
			deleteItem(id);
		}
	}

	async function deleteItem(id) {
		await fetch(`${apiURL}/items/${id}`, {
			method: "DELETE",
		});

		const filteredItems = items.filter(item => {
			if (item.id === id) {
				return false;
			} else {
				return true;
			}
		});

		setItems(filteredItems);
		setCurrentItem(null);
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
			<main>
				<h1>{currentItem.name}</h1>
				<button className="showButton" onClick={() => setIsUpdateFormShowing(!isUpdateFormShowing)}>
					{isUpdateFormShowing ? "Hide Form" : "Update Item Details"}
				</button>
				{isUpdateFormShowing && <UpdateForm {...currentItem} updateItem={updateItem} />}
				<img src={currentItem.image} alt={currentItem.name} />
				<p className="itemPrice">£{currentItem.price.toFixed(2)}</p>
				<p className="description">{currentItem.description}</p>
				<p>
					<button onClick={() => setCurrentItem(null)}>All Items</button>
				</p>
				<p>
					<button onClick={() => confirmDelete(currentItem.id)}>Delete Item</button>
				</p>
			</main>
		);
	}

	return (
		<main>
			<h1>Inventory App</h1>
			<button className="showButton" onClick={() => setIsFormShowing(!isFormShowing)}>
				{isFormShowing ? "Hide Form" : "Add New Item"}
			</button>
			{isFormShowing && <Form addItem={addItem} />}
			<ul>
				{items.map(item => (
					<li key={item.id}>
						<h2 className="itemName">
							<button className="itemNameButton" onClick={() => setCurrentItem(item)}>{item.name}</button>
						</h2>
						<h3>£{item.price}</h3>
						<img src={item.image} alt="" />
						{/* <h3 className="description">{item.description}</h3> */}
						<h3>{item.category}</h3>
					</li>
				))}
			</ul>
		</main>
	);
};
