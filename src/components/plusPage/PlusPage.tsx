import React from "react";
import { P } from "../../style/style";
import styled from "styled-components";
import TitlePage from "../globalComponent/TitlePage";
import SimpleDialog from "../onePage/dialog";
import StarSVG from "./starSvg/StarSVG";
import data from "../../data/twoLevelData.json";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

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
  const stateRedux = useSelector(
    (store: RootState) => store.plusPageInputReducer.startData[0].a
  );
  const [open, setOpen] = React.useState<string>("");

  const handleClose = () => setOpen("");

  const state = data[0].plusPageData;

  const stringQvest: any = state.qvest;
  const updateStringQvest: number = parseInt(stringQvest.match(/\d+/));

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
            <PVariant2>
              {stringQvest.replace(updateStringQvest, stateRedux)}
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
