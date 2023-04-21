

import React, { useState } from "react";

// Compteur avec hooks et fonction fléchée (useState)
const Counter = () => {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // Fonction pour gérer la validation de la journée
  const handleValidation = () => {
    if (!submitted) {
      setCount(count + 1);
      setSubmitted(true);
    }
  };

  // Fonction pour gérer la soumission du formulaire et l'enregistrement des données
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ count, price }),
    });

    if (response.ok) {
      alert("Données enregistrées avec succès !");
      setSubmitted(false);
    } else {
      alert("Erreur lors de l'enregistrement des données.");
    }
  };

  
  // Affichage du compteur et du formulaire
  return (
    <div className="container">
      <div className="counter">
        <h2>Compteur : {count}</h2>
        <button onClick={handleValidation}>Valider la journée</button>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="price">Prix moyen journalier des produits :</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Enregistrer le prix</button>
      </form>
    </div>
  );
};

export default Counter;




















