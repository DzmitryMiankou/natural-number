import React from "react";
import styled, { keyframes } from "styled-components";
import Number from "./number/Number";

const rotate = keyframes`
  0% {
    opacity: 0;
  };
  100% {
    opacity: 1;
  }
`;

const Main = styled.main`
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Pann = styled.p`
  text-align: center;
  font-size: 64px;
  color: #e97b00;
  font-weight: 700;
  animation: ${rotate} 1s linear;
  width: 50vw;
`;

const OnePage = () => {
  return (
    <Main>
      <Pann>
        Натурьльные числа — это числа, которые используются при счёте предметов
      </Pann>
      <Number />
    </Main>
  );
};

export default OnePage;
