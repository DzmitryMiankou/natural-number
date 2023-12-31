import React from "react";
import styled, { keyframes } from "styled-components";
import MultiActionAreaCard from "./card/Cards";
import { StateMaimPageType } from "../../routes/routes";

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
  text-align: center;
  color: var(--color-yellow-title);
  text-shadow: 0 0 1px #ffffff,
    -1px -1px 0 hsl(13.92, 69.83240223463687%, 35.09803921568627%),
    -1px -1px 1px hsl(23.04, 69.83240223463687%, 35.09803921568627%),
    -1px -1px 1px hsl(80, 10%, 15%);
  font-weight: 800;
  @media (max-width: 1600px) {
    font-size: 64px;
  }
  @media (max-width: 1195px) {
    margin: 40px;
  }
  @media (max-width: 560px) {
    font-size: 34px;
  }
`;

const MaimPage: React.FC<{ state: StateMaimPageType }> = ({ state }) => {
  return (
    <Main>
      <Title>{state.main[0].title}</Title>
      <MultiActionAreaCard state={state} />
    </Main>
  );
};

export default MaimPage;
