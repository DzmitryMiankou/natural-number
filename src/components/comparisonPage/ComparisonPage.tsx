import React, { useState } from "react";
import { P, rotateAnimation } from "../../style/style";
import dishes from "../../img/dishes.svg";
import apple from "../../img/apple.svg";
import styled from "styled-components";
import TitlePage from "../globalComponent/TitlePage";
import SimpleDialog from "../onePage/dialog";
import data from "../../data/twoLevelData.json";

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

const PVariant2 = styled(P)`
  margin-bottom: 50px;
`;

const Box = styled.div`
  height: 60vh;
`;

const enum OkErrType {
  ok,
  err,
}

type OkErrTypeStrings = keyof typeof OkErrType;

const ComparisonPage = () => {
  const [open, setOpen] = useState<OkErrTypeStrings | "">("");
  const [openSimbol, setOpenSimbol] = useState<"<" | "?">("?");

  const handleClickOpen = (str: string) => {
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
          <Box>
            <PVariant2>{state.qvest}</PVariant2>
            <BoxImg>
              <Img
                onClick={() => handleClickOpen("ok")}
                src={apple}
                alt="img"
              />
              <PVariant>{openSimbol}</PVariant>
              <Img
                onClick={() => handleClickOpen("no")}
                src={dishes}
                alt="img"
              />
            </BoxImg>
          </Box>
        </>
      }
    />
  );
};

export default ComparisonPage;
