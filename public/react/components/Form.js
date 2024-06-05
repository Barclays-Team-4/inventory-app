import React, { useState } from "react";

function Form(props) {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	const [category, setCategory] = useState("");
	const [image, setImage] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
		props.addItem({ name, description, price, category, image });
		setName("");
		setDescription("");
		setPrice(0);
		setCategory("");
		setImage("");
	}

	return (
		<>
			<form id="form" onSubmit={handleSubmit}>
				<p>
					<label>Name:</label>
					<br />
					<input value={name} onChange={event => setName(event.target.value)} />
				</p>

				<p>
					<label>Description:</label>
					<br />
					<textarea value={description} onChange={event => setDescription(event.target.value)} />
				</p>

				<p>
					<label>Price:</label>
					<br />
					<input type="number" value={price} step={0.01} onChange={event => setPrice(event.target.value)} />
				</p>

				<p>
					<label>Category:</label>
					<br />
					<input value={category} onChange={event => setCategory(event.target.value)} />
				</p>

				<p>
					<label>Image:</label>
					<br />
					<input value={image} onChange={event => setImage(event.target.value)} />
				</p>

				<button type="submit" className="btn">
					Add Item
				</button>
			</form>
		</>
	);
}

export { Form };
