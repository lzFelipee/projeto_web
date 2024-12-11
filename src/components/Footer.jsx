import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 10px 0;
  background-color: #333;
  color: white;
  text-align: center;
  position: relative;
  bottom: 0;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px; /* Definindo uma altura mínima consistente para o footer */

  @media (max-width: 768px) {
    padding: 15px 0;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    padding: 10px 0;
  }
`;

const FooterText = styled.p`
  font-size: 1rem;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 Meu Projeto JavaScript - Todos os direitos reservados</FooterText>
    </FooterContainer>
  );
};

export default Footer;
