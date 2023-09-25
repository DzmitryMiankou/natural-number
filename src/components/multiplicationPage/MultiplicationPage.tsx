import React, { MouseEvent, useState } from "react";
import { P, sxGroupButton } from "../../style/style";
import styled from "styled-components";
import TitlePage from "../globalComponent/TitlePage";
import SimpleDialog from "../onePage/dialog";
import data from "../../data/twoLevelData.json";
import Img1 from "../../img/multiplGame.svg";
import { Button, Box } from "@mui/material";

const Img = styled.img``;

const PVariant2 = styled(P)``;

const BoxImg = styled.div``;

const MultiplicationPage = () => {
  const [open, setOpen] = useState<string>("");

  const handleClickOpen = (e: MouseEvent<HTMLButtonElement>, num: number) => {
    e.preventDefault();
    return num === 24 ? setOpen("ok") : setOpen("err");
  };

  const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    return setOpen("");
  };

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
            <PVariant2>{state.qvest}</PVariant2>
            <Box sx={sxGroupButton.boxButton}>
              {[30, 24, 18].map((num, i) => (
                <React.Fragment key={i}>
                  <Button
                    onClick={(e) => handleClickOpen(e, num)}
                    sx={sxGroupButton.button}
                    variant="outlined"
                  >
                    {num}
                  </Button>
                </React.Fragment>
              ))}
            </Box>
            <BoxImg>
              <Img src={Img1} alt="img" />
            </BoxImg>
          </Box>
        </>
      }
    />
  );
};

export default MultiplicationPage;
