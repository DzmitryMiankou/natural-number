import styled, { keyframes } from "styled-components";

const opacityAnimation = keyframes`
  0% {  opacity: 0;  }
  100% {  opacity: 1;  }
`;

const rotateAnimation = keyframes`
  0% {  rotate: 0deg;  }
  50% {  rotate: 2deg;  }
  100% {  rotate: 0deg;  }
`;

const Main = styled.main`
  min-height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  animation: ${opacityAnimation} 0.6s linear;
`;

const Pann = styled.p`
  text-align: center;
  font-size: 44px;
  color: var(--color-yellow-title);
  font-weight: 700;
  width: 70vw;
  @media (max-width: 1600px) {
    font-size: 32px;
  }
  @media (max-width: 1195px) {
    margin: 45px;
  }
`;

const Akcent = styled.span`
  color: var(--color-red);
`;

const P = styled.p`
  text-align: center;
  font-size: 34px;
  color: #ff6f00;
  font-weight: 700;
  @media (max-width: 1600px) {
    font-size: 26px;
  }
`;

const BoxTitlePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export {
  Pann,
  Akcent,
  Main,
  opacityAnimation,
  P,
  rotateAnimation,
  BoxTitlePage,
};
