import React, { useState, MouseEvent } from "react";
import { P } from "../../style/style";
import styled from "styled-components";
import TitlePage from "../globalComponent/TitlePage";
import SimpleDialog from "../onePage/dialog";
import data from "../../data/twoLevelData.json";
import img from "../../img/DivisionGame.svg";
import DivisionSVG from "./divisionSVG/DivisionSVG";

const BoxImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const PVariant2 = styled(P)`
  max-width: 550px;
  margin: auto;
  text-align: center;
  @media (max-width: 1600px) {
    max-width: 600px;
  }
  @media (max-width: 900px) {
    width: 60%;
  }
`;

const Box = styled.div`
  width: 100%;
  @media (max-width: 900px) {
    width: 140%;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const DivisionPage = () => {
  const [open, setOpen] = useState<string>("");

  const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    return setOpen("");
  };

  const state = data[0].divisionData;

  return (
    <TitlePage
      educationText={state.educationText}
      educationTest={state.educationTest}
      alignMain={"space-between"}
      title={{ title: state.title, accent: state.accent }}
      boximg={
        <>
          <SimpleDialog opens={open} handleClose={handleClose} />
          <Box>
            <PVariant2>{state.qvest}</PVariant2>
            <BoxImg>
              <DivisionSVG />
              <Img src={img} alt="img" />
            </BoxImg>
          </Box>
        </>
      }
    />
  );
};

export default DivisionPage;
