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
				<label>
					Name:
					<input value={name} onChange={event => setName(event.target.value)} />
				</label>

				<label>
					Description:
					<input value={description} onChange={event => setDescription(event.target.value)} />
				</label>

				<label>
					Price:
					<input type="number" value={price} step={0.01} onChange={event => setPrice(event.target.value)} />
				</label>

				<label>
					Category:
					<input value={category} onChange={event => setCategory(event.target.value)} />
				</label>

				<label>
					Image:
					<input
						value={image}
						//<img src={props.sauce.image} alt={props.sauce.name} />
						onChange={event => setImage(event.target.value)}
					/>
				</label>

				<button type="submit" className="btn">
					Submit form
				</button>
			</form>
		</>
	);
}

export { Form };
