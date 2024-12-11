import React, { useState } from "react";
import styled from "styled-components";

// Estilos para a página DatePage
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

  &:hover {
    background-color: #2980b9;
    transform: scale(1.05);
  }

  &:active {
    background-color: #1c5985;
  }
`;

const Result = styled.h2`
  margin-top: 20px;
  font-size: 1.5rem;
  color: #27ae60;
`;

const DatePage = () => {
  // Armazena a data atual
  const [date, setDate] = useState(new Date());
  
  // Armazena o número de dias que o usuário deseja adicionar
  const [daysToAdd, setDaysToAdd] = useState(0);
  
  // Armazena a nova data calculada após a adição dos dias
  const [newDate, setNewDate] = useState(null);

  // Função para adicionar os dias à data
  const handleAddDays = () => {
    const updatedDate = new Date(date); // Cria uma cópia da data atual
    updatedDate.setDate(updatedDate.getDate() + parseInt(daysToAdd)); // Adiciona os dias
    setNewDate(updatedDate); // Atualiza o estado com a nova data
  };

  return (
    <Container>
      <Title>Manipulação de Datas</Title>

      <InfoText>Data Atual: {date.toLocaleDateString()}</InfoText> {/* Exibe a data atual */}

      <div>
        <Input
          type="number"
          value={daysToAdd}
          onChange={(e) => setDaysToAdd(e.target.value)} // Atualiza o estado com o valor inserido
          placeholder="Digite o número de dias para adicionar"
        />
        <Button onClick={handleAddDays}>Adicionar Dias</Button>
      </div>

      {newDate && (
        <Result>Nova Data: {newDate.toLocaleDateString()}</Result> // Exibe a nova data calculada
      )}
    </Container>
  );
};

export default DatePage;
