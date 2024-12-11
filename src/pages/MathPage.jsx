import React, { useState } from "react";
import styled from "styled-components";

// Estilos para a página MathPage
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  width: 100%;
  max-width: 300px;
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

const MathPage = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(null);

  const handleSum = () => setResult(number1 + number2);
  const handleSubtract = () => setResult(number1 - number2);
  const handleMultiply = () => setResult(number1 * number2);
  const handleDivide = () => {
    if (number2 === 0) {
      setResult("Erro: Divisão por zero!");
    } else {
      setResult(number1 / number2);
    }
  };
  const handleSquareRoot = () => setResult(Math.sqrt(number1));
  const handlePower = () => setResult(Math.pow(number1, 2)); // Exemplo: eleva ao quadrado

  return (
    <Container>
      <Title>Operações Matemáticas</Title>
      
      <div>
        <Input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(Number(e.target.value))}
          placeholder="Digite o primeiro número"
        />
        <Input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(Number(e.target.value))}
          placeholder="Digite o segundo número"
        />
      </div>

      <ButtonContainer>
        <Button onClick={handleSum}>Somar</Button>
        <Button onClick={handleSubtract}>Subtrair</Button>
        <Button onClick={handleMultiply}>Multiplicar</Button>
        <Button onClick={handleDivide}>Dividir</Button>
        <Button onClick={handleSquareRoot}>Raiz Quadrada</Button>
        <Button onClick={handlePower}>Potência (Ao Quadrado)</Button>
      </ButtonContainer>

      {result !== null && <Result>Resultado: {result}</Result>}
    </Container>
  );
};

export default MathPage;
