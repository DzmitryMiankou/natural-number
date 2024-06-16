import React from "react";
import styled from "styled-components";

const AppDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  height: 100vh;
`;

const H1 = styled.h1`
  max-width: 700px;
  text-align: center;
`;

const Button = styled.a`
  padding: 20px;
  background-color: #aa5500;
  transition: 200ms;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  &:hover {
    background-color: #ffc68d;
    color: #000000;
  }
`;

const App: React.FC = () => {
  return (
    <AppDiv>
      <H1>
        Уважаемые пользователи и члены жюри! Проект переехал на новый адрес.
        Ссылка ниже.
      </H1>

      <Button href="http://mathpush.by/" rel="noreferrer">
        http://mathpush.by/
      </Button>
    </AppDiv>
  );
};

export default App;
