import React from "react";
import { Pann, Akcent, P, rotateAnimation } from "../../style/style";
import dishes from "../../img/dishes.svg";
import apple from "../../img/apple.svg";
import styled from "styled-components";
import TitlePage from "../globalComponent/TitlePage";

const BoxImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Img = styled.img`
  width: 25vw;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    animation: ${rotateAnimation} 0.6s linear infinite;
  }
`;

const PVariant = styled(P)`
  font-size: 60px;
`;

const ComparisonPage = () => {
  return (
    <TitlePage
      alignMain={"space-around"}
      title={
        <Pann>
          <Akcent>Сравнить числа</Akcent> — это значит определить, какое число
          больше, а какое меньше
        </Pann>
      }
      boximg={
        <>
          <P>Нажмите на фрукт, которого меньше</P>
          <div>
            <BoxImg>
              <Img src={apple} alt="img" />
              <PVariant>{"?"}</PVariant>
              <Img src={dishes} alt="img" />
            </BoxImg>
          </div>
        </>
      }
    />
  );
};

export default ComparisonPage;
