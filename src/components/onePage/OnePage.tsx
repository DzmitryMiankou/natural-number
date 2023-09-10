import React from "react";
import styled from "styled-components";

const Main = styled.main`
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const OnePage = () => {
  return (
    <Main>
      <p>
        Натурьльные числа — это числа, возникающие естественным образом при
        счёте (1, 2, 3, 4, 5, 6, 7 и так далее).
      </p>
    </Main>
  );
};

export default OnePage;
