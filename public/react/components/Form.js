import React, { useState } from "react";

function Form() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState();
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");

  return (
    <>
      <form>
        <label>
          Name:
          <input value={name}
          onChange={(event) => setFirstName(event.target.value)} />
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
      </form>
      <p className="name">Your name is {firstName}</p>
      <p className="age">Your age is {age}</p>
    </>
  );
}

module.exports = { Form };