import React, { useState } from "react";
import styled from "styled-components";

// Estilos para a página ArrayPage
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
  font-family: 'Roboto', sans-serif;
  color: #2c3e50;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 2rem;
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;
  color: #2c3e50;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1.2rem;
  width: 100%;
  max-width: 300px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #3498db;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px;
  font-size: 1.2rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin: 10px;

  &:hover {
    background-color: #2980b9;
    transform: scale(1.05);
  }

  &:active {
    background-color: #1c5985;
  }
`;

const Result = styled.div`
  margin-top: 20px;
  font-size: 1.5rem;
  color: #27ae60;
  word-wrap: break-word;
  max-width: 100%;
`;

const ArrayPage = () => {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const [filterValue, setFilterValue] = useState(0);

  const handleFilter = () => {
    const filteredArray = array.filter(item => item > filterValue);
    setArray(filteredArray);
  };

  const handleMap = () => {
    const mappedArray = array.map(item => item * 2); // Multiplica por 2
    setArray(mappedArray);
  };

  return (
    <Container>
      <Title>Manipulação de Arrays</Title>
      <InfoText>Array atual: {JSON.stringify(array)}</InfoText>
      
      <div>
        <Input
          type="number"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          placeholder="Digite o valor para filtrar"
        />
        <Button onClick={handleFilter}>Filtrar Valores</Button>
        <Button onClick={handleMap}>Mapear Valores (Multiplicar por 2)</Button>
      </div>

      <Result>Array modificado: {JSON.stringify(array)}</Result>
    </Container>
  );
};

export default ArrayPage;
