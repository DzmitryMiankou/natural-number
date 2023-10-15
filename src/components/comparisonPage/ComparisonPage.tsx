import React, { useState } from "react";
import { P, rotateAnimation } from "../../style/style";
import styled from "styled-components";
import TitlePage from "../globalComponent/TitlePage";
import SimpleDialog from "../onePage/dialog";
import data from "../../data/twoLevelData.json";
import { ReactComponent as Dishes } from "../../img/dishes.svg";
import { ReactComponent as Apple } from "../../img/apple.svg";

const BoxImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const DivSVG = styled.div`
  width: 25vw;
  cursor: pointer;
  transition: var(--transition-prop-0_2s);
  &:hover {
    animation: ${rotateAnimation} 0.6s linear infinite;
  }
  @media (max-width: 1500px) {
    width: 38vw;
  }
  @media (max-width: 490px) {
    width: 36vw;
  }
`;

const PVariant = styled(P)`
  font-size: 60px;
`;

const PVariant2 = styled(P)``;

const Box = styled.div`
  margin-bottom: 50px;
`;

const enum OkErrType {
  ok,
  err,
}

type OkErrTypeStrings = keyof typeof OkErrType;

const ComparisonPage: React.FC = () => {
  const [open, setOpen] = useState<OkErrTypeStrings | "">("");
  const [openSimbol, setOpenSimbol] = useState<"<" | "?">("?");

  const handleClickOpen = (str: "ok" | "no") => {
    str === "ok" ? setOpenSimbol("<") : setOpenSimbol("?");
    return str === "ok" ? setOpen("ok") : setOpen("err");
  };

  const handleClose = () => setOpen("");

  const state = data[0].comparisonData;

  return (
    <TitlePage
      educationText={state.educationText}
      educationTest={state.educationTest}
      alignMain={"space-between"}
      title={{ title: state.title, accent: state.accent }}
      boximg={
        <>
          <SimpleDialog opens={open} handleClose={handleClose} />
          <PVariant2>{state.qvest}</PVariant2>
          <Box>
            <BoxImg>
              <DivSVG onClick={() => handleClickOpen("ok")}>
                <Apple />
              </DivSVG>
              <PVariant>{openSimbol}</PVariant>
              <DivSVG onClick={() => handleClickOpen("no")}>
                <Dishes />
              </DivSVG>
            </BoxImg>
          </Box>
        </>
      }
    />
  );
};

export default ComparisonPage;
