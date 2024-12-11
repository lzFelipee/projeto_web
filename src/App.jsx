import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MathPage from "./pages/MathPage";
import DatePage from "./pages/DatePage";
import ArrayPage from "./pages/ArrayPage";
import ObjectPage from "./pages/ObjectPage";
import LocalStoragePage from "./pages/LocalStoragePage";
import APIFetchPage from "./pages/APIFetchPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";

// Container principal com flexbox para garantir que o footer fique na parte inferior
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Garante que a altura mínima ocupe toda a tela */
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/math" element={<MathPage />} />
          <Route path="/date" element={<DatePage />} />
          <Route path="/array" element={<ArrayPage />} />
          <Route path="/object" element={<ObjectPage />} />
          <Route path="/localstorage" element={<LocalStoragePage />} />
          <Route path="/api-fetch" element={<APIFetchPage />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
