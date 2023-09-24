import React from "react";
import { Pann, Akcent, P } from "../../style/style";
import styled from "styled-components";
import TitlePage from "../globalComponent/TitlePage";
import SimpleDialog from "../onePage/dialog";
import data from "../../data/twoLevelData.json";
import Img1 from "../../img/multiplGame.svg";
import MultiSVG from "./multipSVG/MultiSVG";

const Img = styled.img``;

const PVariant2 = styled(P)`
  max-width: 550px;
  margin-bottom: 40px;
  margin: auto;
  @media (max-width: 1600px) {
    max-width: 600px;
  }
`;

const Box = styled.div`
  width: 100%;
`;

const BoxImg = styled.div`
  position: relative;
`;

const MultiplicationPage = () => {
  const [open, setOpen] = React.useState<string>("");

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    return setOpen("");
  };

  const state = data[0].multiplicationPageData;

  return (
    <TitlePage
      educationText={state.educationText}
      educationTest={state.educationTest}
      alignMain={"space-between"}
      title={
        <Pann>
          <Akcent>{state.accent}</Akcent>
          {state.title}
        </Pann>
      }
      boximg={
        <>
          <SimpleDialog opens={open} handleClose={handleClose} />
          <Box>
            <PVariant2>{state.qvest}</PVariant2>
            <BoxImg>
              <Img src={Img1} alt="img" />
              <MultiSVG />
            </BoxImg>
          </Box>
        </>
      }
    />
  );
};

export default MultiplicationPage;
