import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Estilos para a página LocalStoragePage
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

const StoredValue = styled.h2`
  margin-top: 20px;
  font-size: 1.5rem;
  color: #27ae60;
`;

const LocalStoragePage = () => {
  // Estado para armazenar o valor do input e o valor recuperado do LocalStorage
  const [inputValue, setInputValue] = useState("");
  const [storedValue, setStoredValue] = useState("");

  // Função para salvar no LocalStorage
  const handleSave = () => {
    localStorage.setItem("userData", inputValue); // Salva o dado no LocalStorage
    setStoredValue(inputValue); // Atualiza o estado para mostrar na tela
  };

  // Função para limpar os dados do LocalStorage
  const handleClear = () => {
    localStorage.removeItem("userData"); // Remove o dado do LocalStorage
    setStoredValue(""); // Limpa o estado
  };

  // Hook para carregar o valor do LocalStorage quando a página é carregada
  useEffect(() => {
    const savedValue = localStorage.getItem("userData");
    if (savedValue) {
      setStoredValue(savedValue); // Define o valor armazenado no estado
    }
  }, []); // O array vazio faz o hook rodar apenas uma vez (na montagem do componente)

  return (
    <Container>
      <Title>Salvar e Recuperar Dados com LocalStorage</Title>

      {/* Formulário de entrada */}
      <div>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Atualiza o estado do input
          placeholder="Digite algo para salvar"
        />
        <Button onClick={handleSave}>Salvar</Button>
      </div>

      {/* Exibição do valor armazenado */}
      {storedValue && <StoredValue>Valor armazenado: {storedValue}</StoredValue>}

      {/* Botão para limpar o valor do LocalStorage */}
      <Button onClick={handleClear}>Limpar Dados</Button>
    </Container>
  );
};

export default LocalStoragePage;
