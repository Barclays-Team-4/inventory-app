import React, { useState } from "react";
import { items } from "../server/seedData.js";

function Form() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState();
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");

    const [items, setItems] = useState(items)

    function handleSubmit(event) {
      e.preventDefault();
      setItems([...items, { name, description, price, category, image }]);
      setName("");
      setDescription("");
      setPrice();
      setCategory("");
      setImage("");
  }

  return (
    <>
      <form id="form"
      onSubmit={handleSubmit}>
        <label>
          Name:
          <input value={name}
          onChange={(event) => setName(event.target.value)} />
        </label>

        <label>
          Description:
          <input value={description}
          onChange={(event) => setDescription(event.target.value)}/>
        </label>

        <label>
          Price:
          <input value={price}
          onChange={(event) => setPrice(event.target.value)}/>
        </label>

        <label>
          Category:
          <input value={category}
          onChange={(event) => setCategory(event.target.value)}/>
        </label>

        <label>
          Image:
          <input value={image}
          //<img src={props.sauce.image} alt={props.sauce.name} />
          onChange={(event) => setImage(event.target.value)}/>
        </label>

        <button type="submit" className="btn">
          Submit form
        </button>

      </form>
      
    </>
  );
}

module.exports = { Form };