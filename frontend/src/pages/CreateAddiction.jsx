



import React from "react";
import Header from "../layout/Header";

const CreateAddiction = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const description = event.target.description.value;

    fetch("http://localhost:3002/api/addictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    }).then((response) => {
      if (response.status === 200) {
        console.log("Addiction créée");
      } else {
        console.log("Erreur");
      }
    });
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom de l'addiction</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea name="description"></textarea>
        </div>
        <button type="submit">Créer l'addiction</button>
      </form>
    </>
  );
};

export default CreateAddiction;






















