import React from "react";
import { Pann, Akcent, P } from "../../style/style";
import styled from "styled-components";
import TitlePage from "../globalComponent/TitlePage";
import SimpleDialog from "../onePage/dialog";
import Img1 from "../../img/mins.svg";
import HeroSVG from "./heroSVG/HeroSvg";

const BoxImg = styled.div`
  width: 100%;
`;

const PVariant2 = styled(P)`
  margin-bottom: 40px;
  @media (max-width: 1600px) {
    font-size: 26px;
  }
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const MinusPage = () => {
  const [open, setOpen] = React.useState<string>("");

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    return setOpen("");
  };

  return (
    <TitlePage
      alignMain={"space-between"}
      title={
        <Pann>
          <Akcent>Вычитание </Akcent> — это арифметическое действие, в котором
          единицы двух чисел объединяются в одно новое число
        </Pann>
      }
      boximg={
        <BoxImg>
          <SimpleDialog opens={open} handleClose={handleClose} />
          <Box>
            <PVariant2>Выберите чудика с правильным ответом</PVariant2>
            <HeroSVG />
            <img src={Img1} alt="img" />
          </Box>
        </BoxImg>
      }
    />
  );
};

export default MinusPage;
