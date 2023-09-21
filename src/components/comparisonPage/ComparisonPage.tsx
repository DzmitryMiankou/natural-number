import React from "react";
import { Pann, Akcent, P, rotateAnimation } from "../../style/style";
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

const ComparisonPage = () => {
  const [open, setOpen] = React.useState<string>("");
  const [openSimbol, setOpenSimbol] = React.useState<string>("?");

  const handleClickOpen = (
    e: React.MouseEvent<HTMLImageElement>,
    str: string
  ) => {
    e.preventDefault();
    str === "ok" ? setOpenSimbol("<") : setOpenSimbol("?");
    return str === "ok" ? setOpen("ok") : setOpen("err");
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    return setOpen("");
  };

  const state = data[0].comparisonData;

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
              <Img
                onClick={(e) => handleClickOpen(e, "ok")}
                src={apple}
                alt="img"
              />
              <PVariant>{openSimbol}</PVariant>
              <Img
                onClick={(e) => handleClickOpen(e, "no")}
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
