import React from "react";
import { P } from "../../style/style";
import styled from "styled-components";
import TitlePage from "../globalComponent/TitlePage";
import SimpleDialog from "../onePage/dialog";
import StarSVG from "./starSvg/StarSVG";
import data from "../../data/twoLevelData.json";

const BoxImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PVariant2 = styled(P)`
  max-width: 550px;
  margin-bottom: 40px;
  @media (max-width: 1600px) {
    max-width: 600px;
  }
`;

const Box = styled.div``;

const PlusPage: React.FC = () => {
  const [open, setOpen] = React.useState<string>("");

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    return setOpen("");
  };

  const state = data[0].plusPageData;

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
              <StarSVG />
            </BoxImg>
          </Box>
        </>
      }
    />
  );
};

export default PlusPage;
