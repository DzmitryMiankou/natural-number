import React from "react";
import styled from "styled-components";
import Img1 from "../../img/aaa.svg";
import { Button, Box } from "@mui/material";
import SimpleDialog from "./dialog";
import { P, sxGroupButton } from "../../style/style";
import TitlePage from "../globalComponent/TitlePage";
import data from "../../data/twoLevelData.json";
import ButtonClickQvestHOC from "../../HOC/ButtonClickQvestHOC";
import { ReturnPropType } from "../../HOC/ButtonClickQvestHOC";
import { SxProps } from "@mui/material";

const BoxQvest = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PVariant = styled(P)`
  margin-bottom: 20px;
`;

const sx: { boxButton: SxProps; button: SxProps } = {
  boxButton: { display: "flex", gap: "5px" },
  button: sxGroupButton.button,
};

const OnePageH = ({ handleClose, open, handleClickOpen }: ReturnPropType) => {
  const state = data[0].naturalData;

  return (
    <TitlePage
      educationText={state.educationText}
      educationTest={state.educationTest}
      alignMain={"space-between"}
      title={{ title: state.title, accent: state.accent }}
      boximg={
        <BoxQvest>
          <PVariant>{state.qvest}</PVariant>
          <SimpleDialog opens={open} handleClose={handleClose} />
          <Box sx={sx.boxButton}>
            {[2, 5, 3].map((num, i) => (
              <React.Fragment key={i}>
                <Button
                  onClick={() => handleClickOpen(num, 3)}
                  sx={sx.button}
                  variant="outlined"
                >
                  {num}
                </Button>
              </React.Fragment>
            ))}
          </Box>
          <img src={Img1} alt="img" />
        </BoxQvest>
      }
    />
  );
};

const OnePage = ButtonClickQvestHOC(OnePageH);
export default OnePage;
