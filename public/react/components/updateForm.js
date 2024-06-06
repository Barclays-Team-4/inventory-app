import React, { useState } from "react";

function UpdateForm(props) {
	const [name, setName] = useState(props.name);
	const [description, setDescription] = useState(props.description);
	const [price, setPrice] = useState(props.price);
	const [category, setCategory] = useState(props.category);
	const [image, setImage] = useState(props.image);

	function updateSubmit(event) {
		event.preventDefault();
		props.updateItem(props.id, { name, description, price, category, image });
		setName("");
		setDescription("");
		setPrice(0);
		setCategory("");
		setImage("");
	}

	return (
		<>
			<form id="form" onSubmit={updateSubmit}>
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
					Update Item
				</button>
			</form>
		</>
	);
}

export { UpdateForm };
