import React, { useState } from "react";

const ObjectPage = () => {
  const [person, setPerson] = useState({ name: "John", age: 30 });
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  const updateObject = () => {
    setPerson((prev) => ({
      ...prev,
      name: newName || prev.name,
      age: newAge || prev.age,
    }));
  };

  return (
    <div>
      <h1>Manipulação de Objetos</h1>
      <p>Nome: {person.name}</p>
      <p>Idade: {person.age}</p>
      
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Novo nome"
      />
      <input
        type="number"
        value={newAge}
        onChange={(e) => setNewAge(e.target.value)}
        placeholder="Nova idade"
      />
      <button onClick={updateObject}>Atualizar Informações</button>
    </div>
  );
};

export default ObjectPage;
