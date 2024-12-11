import React, { useState } from "react";
import styled from "styled-components";

// Estilos para a página ArrayPage
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f9;
  font-family: 'Roboto', sans-serif;
  color: #2c3e50;
  padding: 20px;
  width: 100%; /* Ajustado para a largura da tela */

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;
  color: #2c3e50;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 8px 0;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin: 6px 0;
  }
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

  @media (max-width: 768px) {
    width: 100%;
    max-width: 250px;
    font-size: 1rem;
    padding: 8px;
    margin: 8px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 200px;
    font-size: 0.9rem;
    padding: 6px;
    margin: 6px;
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

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px;
    margin: 8px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 8px;
    margin: 6px;
  }
`;

const Result = styled.div`
  margin-top: 20px;
  font-size: 1.5rem;
  color: #27ae60;
  word-wrap: break-word;
  max-width: 100%;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ArrayPage = () => {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const [filterValue, setFilterValue] = useState(0);

  const handleFilter = () => {
    if (filterValue === "") {
      alert("Por favor, insira um valor para filtrar.");
      return;
    }
    const filteredArray = array.filter(item => item > Number(filterValue));
    if (filteredArray.length === 0) {
      alert('Nenhum valor encontrado para o filtro especificado!');
    }
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
          onChange={(e) => setFilterValue(Math.max(0, e.target.value))}
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
