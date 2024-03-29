import React from "react";
import { P } from "../../style/style";
import styled from "styled-components";
import TitlePage from "../globalComponent/TitlePage";
import HeroSVG from "./heroSVG/HeroSvg";
import data from "../../data/twoLevelData.json";
import { ReactComponent as Img } from "../../img/mins.svg";

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  @media (max-width: 1000px) {
    width: 120vw;
    transform: translateX(-15px);
  }
  @media (max-width: 700px) {
    width: 140vw;
    transform: translateX(-25px);
  }
`;

const Block = styled.div`
  display: block;
`;

const PVariant2 = styled(P)`
  margin-bottom: 35px;
  @media (max-width: 1600px) {
    font-size: 26px;
  }
`;

const MinusPage: React.FC = () => {
  const state = data[0].minusData;

  return (
    <TitlePage
      alignMain={"space-between"}
      educationText={state.educationText}
      educationTest={state.educationTest}
      title={{ title: state.title, accent: state.accent }}
      boximg={
        <>
          <PVariant2>{state.qvest}</PVariant2>
          <Box>
            <Block>
              <HeroSVG />
            </Block>
            <Img />
          </Box>
        </>
      }
    />
  );
};

export default MinusPage;
