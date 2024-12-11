import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  width: 100%;
  padding: 10px 0;
  background-color: #007bff;
  color: white;
  text-align: center;
  box-shadow: 0 4px 2px -2px gray;
  position: relative;
  min-height: 60px;  /* Definindo uma altura mínima consistente */

  @media (max-width: 768px) {
    padding: 15px 0;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          Meu Projeto JavaScript
        </Link>
      </HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
