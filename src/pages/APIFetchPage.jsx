import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Estilos para a página APIFetchPage
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
  width: 100%; /* Garantindo que a largura ocupe 100% */

  @media (max-width: 768px) {
    padding: 15px; /* Menos padding para telas médias */
  }

  @media (max-width: 480px) {
    padding: 10px; /* Reduzindo o padding para telas pequenas */
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 2rem;
  text-align: center; /* Centralizando o título */

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const LoadingText = styled.p`
  font-size: 1.5rem;
  color: #e67e22;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ErrorText = styled.p`
  font-size: 1.5rem;
  color: #e74c3c;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const PostList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 800px; /* Garantindo que a lista não ultrapasse o tamanho da tela */

  @media (max-width: 768px) {
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    padding: 0 5px;
  }
`;

const PostItem = styled.li`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const PostTitle = styled.h3`
  font-size: 1.8rem;
  color: #3498db;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const PostBody = styled.p`
  font-size: 1.2rem;
  color: #2c3e50;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Settings = styled.div`
  margin-top: 2rem;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 300px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    max-width: 250px;
  }
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1.2rem;
  margin-right: 10px;
  width: 50px;
  border-radius: 5px;
  border: 1px solid #ccc;

  @media (max-width: 768px) {
    width: 40px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    width: 35px;
    font-size: 0.9rem;
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
    padding: 8px 12px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 6px 10px;
  }
`;

const APIFetchPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postsToShow, setPostsToShow] = useState(5); // Quantidade de posts a exibir
  const [inputValue, setInputValue] = useState(postsToShow);

  // Carregar a configuração salva no LocalStorage ao carregar a página
  useEffect(() => {
    const savedPostsCount = localStorage.getItem("postsToShow");
    if (savedPostsCount) {
      setPostsToShow(Number(savedPostsCount));
      setInputValue(Number(savedPostsCount));
    }
  }, []);

  // Buscar dados da API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na resposta da API");
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Salvar a configuração de quantidade de posts no LocalStorage
  const handleSaveSettings = () => {
    localStorage.setItem("postsToShow", inputValue);
    setPostsToShow(Number(inputValue));
  };

  return (
    <Container>
      <Title>Consumindo uma API com Configuração de Exibição</Title>

      {loading && <LoadingText>Carregando...</LoadingText>}
      {error && <ErrorText>{`Erro: ${error}`}</ErrorText>}

      {!loading && !error && (
        <div>
          <h2>Posts:</h2>
          <PostList>
            {data.slice(0, postsToShow).map((post) => (
              <PostItem key={post.id}>
                <PostTitle>{post.title}</PostTitle>
                <PostBody>{post.body}</PostBody>
              </PostItem>
            ))}
          </PostList>
        </div>
      )}

      <Settings>
        <h3>Configuração de Exibição</h3>
        <p>Quantos posts você gostaria de ver?</p>
        <div>
          <Input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            min="1"
          />
          <Button onClick={handleSaveSettings}>Salvar</Button>
        </div>
      </Settings>
    </Container>
  );
};

export default APIFetchPage;
