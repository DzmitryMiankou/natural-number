import React from "react";
import styled from "styled-components";
import { ReactComponent as Img } from "../../img/aaa.svg";
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
  margin-bottom: -45px;
`;

const PVariant = styled(P)``;

const sx: { boxButton: SxProps; button: SxProps; boxImg: SxProps } = {
  boxButton: { display: "flex", gap: "5px" },
  button: { ...sxGroupButton.button, marginBottom: "5px" },
  boxImg: {
    width: "100vw",
    marginBottom: "-5px",
    "@media (max-width: 1000px)": {
      width: "120vw",
      transform: "translateX(-45px)",
    },
    "@media (max-width: 540px)": {
      width: "130vw",
      transform: "translateX(-25px)",
    },
  },
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
        <>
          <PVariant>{state.qvest}</PVariant>{" "}
          <BoxQvest>
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
          </BoxQvest>
          <Box sx={sx.boxImg}>
            <Img />
          </Box>
        </>
      }
    />
  );
};

const OnePage = ButtonClickQvestHOC(OnePageH);
export default OnePage;
