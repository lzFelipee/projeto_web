import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Estilos para a página inicial
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #6dd5ed, #2193b0);
  padding: 20px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  margin-bottom: 3rem;
  text-align: center;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const NavItem = styled.li`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 15px 30px;
  background-color: #3498db;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #2980b9;
    transform: scale(1.05);
  }

  &:active {
    background-color: #1c5985;
  }

  @media (max-width: 768px) {
    padding: 12px 25px;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 1rem;
  }
`;

const HomePage = () => {
  return (
    <Container>
      <Title>Funcionalidades JavaScript</Title>
      <NavList>
        <NavItem><StyledLink to="/math">MathPage</StyledLink></NavItem>
        <NavItem><StyledLink to="/date">DatePage</StyledLink></NavItem>
        <NavItem><StyledLink to="/array">ArrayPage</StyledLink></NavItem>
        <NavItem><StyledLink to="/localstorage">LocalStoragePage</StyledLink></NavItem>
        <NavItem><StyledLink to="/api-fetch">APIFetchPage</StyledLink></NavItem>
      </NavList>
    </Container>
  );
};

export default HomePage;
