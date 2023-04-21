


import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import { useNavigate } from "react-router-dom";

const AddictionsList = () => {
  const [addictionsData, setAddictionsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3002/api/addictions")
      .then((addictionsDataJson) => addictionsDataJson.json())
      .then((addictionsDataJs) => {
        setAddictionsData(addictionsDataJs.data);
      });
  }, []);

  const handleDeleteClick = (addiction) => {
    fetch("http://localhost:3002/api/addictions/" + addiction.id, {
      method: "DELETE",
    })
      .then(() => {
        navigate(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <h1>Liste des addictions</h1>
      {addictionsData.map((addiction) => {
        return (
          <div key={addiction.id}>
            <h2>{addiction.name}</h2>
            <p>Description : {addiction.description}</p>
            <button onClick={() => handleDeleteClick(addiction)}>
              Supprimer l'addiction
            </button>
          </div>
        );
      })}
    </>
  );
};

export default AddictionsList;























