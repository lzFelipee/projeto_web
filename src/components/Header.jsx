import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Estilos para o Header
const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px 0;
  background-color: #007bff;
  color: white;
  text-align: center;
  box-shadow: 0 4px 2px -2px gray;

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
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: 3px solid #fff;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <StyledLink to="/">Projeto JavaScript</StyledLink>
      </HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
