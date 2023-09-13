import styled, { keyframes } from "styled-components";

const opacityAnimation = keyframes`
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
  animation: ${opacityAnimation} 0.6s linear;
`;

const Pann = styled.p`
  text-align: center;
  font-size: 44px;
  color: var(--color-yellow-title);
  font-weight: 700;
  width: 70vw;
`;

const Akcent = styled.span`
  color: var(--color-red);
`;

export { Pann, Akcent, Main, opacityAnimation };
