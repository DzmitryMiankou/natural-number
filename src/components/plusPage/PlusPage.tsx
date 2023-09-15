import React from "react";
import { Pann, Akcent, P } from "../../style/style";
import styled from "styled-components";
import TitlePage from "../globalComponent/TitlePage";
import SimpleDialog from "../onePage/dialog";
import StarSVG from "./starSvg/StarSVG";

const BoxImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PVariant2 = styled(P)`
  max-width: 550px;
  margin-bottom: 40px;
`;

const Box = styled.div``;

const PlusPage = () => {
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
          <Akcent>Сложение </Akcent> — это арифметическое действие, в котором
          единицы двух чисел объединяются в одно новое число
        </Pann>
      }
      boximg={
        <>
          <SimpleDialog opens={open} handleClose={handleClose} />
          <Box>
            <PVariant2>
              Введите число, которое в сумме со вторым даст 8
            </PVariant2>
            <BoxImg>
              <StarSVG />
            </BoxImg>
          </Box>
        </>
      }
    />
  );
};

export default PlusPage;
