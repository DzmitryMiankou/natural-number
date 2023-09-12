import React from "react";
import styled, { keyframes } from "styled-components";
import MultiActionAreaCard from "./card/Cards";

const rotate = keyframes`
0% {  opacity: 0;  }
 100% {  opacity: 1;  }
`;

const Main = styled.main`
  min-height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  animation: ${rotate} 0.6s linear;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 84px;
  color: var(--color-yellow-title);
  font-weight: 800;
`;

const MaimPage = () => {
  return (
    <Main>
      <Title>натуральные числа</Title>
      <MultiActionAreaCard />
    </Main>
  );
};

export default MaimPage;
