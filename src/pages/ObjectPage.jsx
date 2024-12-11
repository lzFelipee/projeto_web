import React, { useState } from "react";
import styled from "styled-components";

// Container principal
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
  font-family: 'Roboto', sans-serif;
  color: #333;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
`;

// Título da página
const Title = styled.h1`
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Estilo para os inputs e botão
const Input = styled.input`
  padding: 10px;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 80%;
  max-width: 400px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    width: 90%;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  font-size: 1.2rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }

  &:active {
    background-color: #1c5985;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 90%;
  }
`;

// Estilo para os textos informativos
const InfoText = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: #2c3e50;
`;

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
    <Container>
      <Title>Manipulação de Objetos</Title>
      <InfoText>Nome: {person.name}</InfoText>
      <InfoText>Idade: {person.age}</InfoText>

      <Input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Novo nome"
      />
      <Input
        type="number"
        value={newAge}
        onChange={(e) => setNewAge(e.target.value)}
        placeholder="Nova idade"
      />
      <Button onClick={updateObject}>Atualizar Informações</Button>
    </Container>
  );
};

export default ObjectPage;
