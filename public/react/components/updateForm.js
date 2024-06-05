import React, { useState } from "react";

function updateForm(props) {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	const [category, setCategory] = useState("");
	const [image, setImage] = useState("");

	function updateSubmit(event) {
		event.preventDefault();
		props.updateItem({ name, description, price, category, image });
		setName("");
		setDescription("");
		setPrice(0);
		setCategory("");
		setImage("");
	}

	return (
		<>
			<form id="form" onSubmit={updateSubmit}>
				<label>
					Name:
					<input value={name} onChange={event => setName(item.id, event.target.value)} />
				</label>

				<label>
					Description:
					<input value={description} onChange={event => setDescription(item.id, event.target.value)} />
				</label>

				<label>
					Price:
					<input type="number" value={price} step={0.01} onChange={event => setPrice(item.id, event.target.value)} />
				</label>

				<label>
					Category:
					<input value={category} onChange={event => setCategory(item.id, event.target.value)} />
				</label>

				<label>
					Image:
					<input value={image} onChange={event => setImage(item.id, event.target.value)} />
				</label>

				<button type="submit" className="btn">
					Update Item
				</button>
			</form>
		</>
	);
}

export { updateForm };
