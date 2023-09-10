import React from "react";
import styled from "styled-components";
import PageRoute from "./routes/rotes";
import BG from "./img/backG.svg";

const AppDiv = styled.div`
  min-height: 100vh;
  overflow-y: hidden;
  background-image: url(${BG});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Footer = styled.footer`
  background-color: #cd9f6b;
  height: 40px;
`;

const App = () => {
  return (
    <AppDiv>
      <PageRoute />
      <Footer>sdfbgsdb</Footer>
    </AppDiv>
  );
};

export default App;
