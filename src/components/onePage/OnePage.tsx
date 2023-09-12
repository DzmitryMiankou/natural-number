import React from "react";
import styled, { keyframes } from "styled-components";
import Number from "./number/Number";
import Img1 from "../../img/aaa.svg";

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
  font-size: 44px;
  color: var(--color-yellow-title);
  font-weight: 700;
  animation: ${rotate} 1s linear;
  width: 70vw;
`;

const Akcent = styled.span`
  color: var(--color-red);
`;

const OnePage = () => {
  return (
    <Main>
      <Pann>
        <Akcent>Натурьльные числа</Akcent> — это числа, которые используются при
        счёте предметов
      </Pann>
      <img src={Img1} alt="img" />
    </Main>
  );
};

export default OnePage;
