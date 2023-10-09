import React from "react";
import { P, sxGroupButton } from "../../style/style";
import TitlePage from "../globalComponent/TitlePage";
import SimpleDialog from "../onePage/dialog";
import data from "../../data/twoLevelData.json";
import Img1 from "../../img/multiplGame.svg";
import { Button, Box } from "@mui/material";
import ButtonClickQvestHOC from "../../HOC/ButtonClickQvestHOC";
import { ReturnPropType } from "../../HOC/ButtonClickQvestHOC";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import styled from "styled-components";
import TooltipButt from "../globalComponent/Tooltip";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { SxProps } from "@mui/material";
import { updateMultiplicationPageAction } from "../../redux/multiplicationReducer/MultiplicationReducer";

const sx: SxProps = {
  fontSize: "35px",
  cursor: "pointer",
  color: "var(--color-red-title-icon)",
  backgroundColor: "#fff1e8",
  borderRadius: "50px",
};

const DivImg = styled.div`
  position: relative;
`;

const SVG = styled.svg`
  position: absolute;
  bottom: 0;
`;

const MultiplicationPageH: React.FC<ReturnPropType> = ({
  handleClose,
  open,
  handleClickOpen,
}) => {
  const stateRedux = useSelector(
    (store: RootState) => store.multiplication.startData[0]
  );
  const dispatch: AppDispatch = useDispatch();
  const state = data[0].multiplicationPageData;
  const restartNumber = () => dispatch(updateMultiplicationPageAction());

  const stringQvest = state.qvest as any;
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
          <Box sx={{ width: "100%" }}>
            <P>{stringQvest.replace(updateStringQvest, stateRedux.a)}</P>
            <Box sx={sxGroupButton.boxButton}>
              {stateRedux.b.map((num, i) => (
                <React.Fragment key={i}>
                  <Button
                    onClick={() => handleClickOpen(num, stateRedux.c)}
                    sx={sxGroupButton.button}
                    variant="outlined"
                  >
                    {num}
                  </Button>
                </React.Fragment>
              ))}
            </Box>
            <DivImg>
              <SVG x="0px" y="0px" viewBox="0 0 1920 451.2">
                <foreignObject x="940" y="20" width="35" height="35">
                  <TooltipButt
                    text={"Обновить"}
                    element={
                      <RestartAltIcon onClick={() => restartNumber()} sx={sx} />
                    }
                  />
                </foreignObject>
                {new Array<{ a: number; transform: number[] }>(3)
                  .fill({
                    a: stateRedux.a,
                    transform: [552, 949, 1326],
                  })
                  .map(({ a, transform }, i) => (
                    <text
                      key={i}
                      transform={`matrix(1 0 0 1 ${transform[i]} 335)`}
                      fill="#DC7E20"
                      fontSize="88"
                    >
                      {a}
                    </text>
                  ))}
              </SVG>
              <img src={Img1} alt="img" />
            </DivImg>
          </Box>
        </>
      }
    />
  );
};

const MultiplicationPage = ButtonClickQvestHOC(MultiplicationPageH);
export default MultiplicationPage;
