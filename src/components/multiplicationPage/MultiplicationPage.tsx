import React from "react";
import { P, sxGroupButton } from "../../style/style";
import TitlePage from "../globalComponent/TitlePage";
import SimpleDialog from "../onePage/dialog";
import data from "../../data/twoLevelData.json";
import Img1 from "../../img/multiplGame.svg";
import { Button, Box } from "@mui/material";
import ButtonClickQvestHOC from "../../HOC/ButtonClickQvestHOC";
import { ReturnPropType } from "../../HOC/ButtonClickQvestHOC";

const MultiplicationPageH = ({
  handleClose,
  open,
  handleClickOpen,
}: ReturnPropType) => {
  const state = data[0].multiplicationPageData;

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
            <P>{state.qvest}</P>
            <Box sx={sxGroupButton.boxButton}>
              {[30, 24, 18].map((num, i) => (
                <React.Fragment key={i}>
                  <Button
                    onClick={() => handleClickOpen(num, 24)}
                    sx={sxGroupButton.button}
                    variant="outlined"
                  >
                    {num}
                  </Button>
                </React.Fragment>
              ))}
            </Box>
            <div>
              <img src={Img1} alt="img" />
            </div>
          </Box>
        </>
      }
    />
  );
};

const MultiplicationPage = ButtonClickQvestHOC(MultiplicationPageH);
export default MultiplicationPage;
