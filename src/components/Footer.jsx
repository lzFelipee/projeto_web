import React from "react";
import styled from "styled-components";

// Estilos para o Footer
const FooterContainer = styled.footer`
  width: 100%;
  padding: 10px 0;
  background-color: #333;
  color: white;
  text-align: center;
  position: relative;
  bottom: 0;
  margin-top: auto;

  @media (max-width: 768px) {
    padding: 15px 0;
  }
`;

const FooterText = styled.p`
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 Projeto JavaScript - Todos os direitos reservados</FooterText>
    </FooterContainer>
  );
};

export default Footer;
