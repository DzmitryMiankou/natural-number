import React from "react";
import {
  Pann,
  Akcent,
  Main,
  P,
  rotateAnimation,
  BoxTitlePage,
} from "../../style/style";
import dishes from "../../img/dishes.svg";
import apple from "../../img/apple.svg";
import styled from "styled-components";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { IconButton } from "@mui/material";
import TooltipButt from "../globalComponent/Tooltip";

const MainVariant = styled(Main)`
  justify-content: space-around;
`;

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
    <MainVariant>
      <BoxTitlePage>
        <Pann>
          <Akcent>Сравнить числа</Akcent> — это значит определить, какое число
          больше, а какое меньше
        </Pann>
        <TooltipButt
          text="Читать больше"
          element={
            <IconButton>
              <MenuBookIcon sx={{ color: "#c15400", fontSize: "45px" }} />
            </IconButton>
          }
        />
      </BoxTitlePage>
      <P>Нажмите на фрукт, которого меньше</P>
      <div>
        <BoxImg>
          <Img src={apple} alt="img" />
          <PVariant>{"?"}</PVariant>
          <Img src={dishes} alt="img" />
        </BoxImg>
      </div>
    </MainVariant>
  );
};

export default ComparisonPage;
