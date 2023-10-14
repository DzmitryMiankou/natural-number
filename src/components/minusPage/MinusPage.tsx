import React from "react";
import { P } from "../../style/style";
import styled from "styled-components";
import TitlePage from "../globalComponent/TitlePage";
import SimpleDialog from "../onePage/dialog";
import HeroSVG from "./heroSVG/HeroSvg";
import data from "../../data/twoLevelData.json";
import { ReactComponent as Img } from "../../img/mins.svg";

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

const MinusPage: React.FC = () => {
  const [open, setOpen] = React.useState<string>("");

  const handleClose = () => setOpen("");

  const state = data[0].minusData;

  return (
    <TitlePage
      alignMain={"space-between"}
      educationText={state.educationText}
      educationTest={state.educationTest}
      title={{ title: state.title, accent: state.accent }}
      boximg={
        <BoxImg>
          <SimpleDialog opens={open} handleClose={handleClose} />
          <Box>
            <PVariant2>{state.qvest}</PVariant2>
            <HeroSVG />
            <Img />
          </Box>
        </BoxImg>
      }
    />
  );
};

export default MinusPage;
