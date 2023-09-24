import React from "react";
import { Pann, Akcent, P } from "../../style/style";
import styled from "styled-components";
import TitlePage from "../globalComponent/TitlePage";
import SimpleDialog from "../onePage/dialog";
import data from "../../data/twoLevelData.json";
import Img1 from "../../img/multiplGame.svg";
import { Button, Box } from "@mui/material";

const Img = styled.img``;

const PVariant2 = styled(P)``;

const sx = {
  button: {
    color: "var(--color-orange-button)",
    border: "solid 1px  var(--color-orange-button)",
    background: "var(--color-BG-button)",
    fontSize: "18px",
    "&:hover": { background: "#fffaf6", border: "solid 1px  #ff6f00" },
  },
};

const BoxImg = styled.div``;

const MultiplicationPage = () => {
  const [open, setOpen] = React.useState<string>("");

  const handleClickOpen = (
    e: React.MouseEvent<HTMLButtonElement>,
    num: number
  ) => {
    e.preventDefault();
    return num === 24 ? setOpen("ok") : setOpen("err");
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    return setOpen("");
  };

  const state = data[0].multiplicationPageData;

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
          <Box sx={{ width: "100%" }}>
            <PVariant2>{state.qvest}</PVariant2>
            <Box
              sx={{
                display: "flex",
                gap: "5px",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              {[30, 24, 18].map((num, i) => (
                <React.Fragment key={i}>
                  <Button
                    onClick={(e) => handleClickOpen(e, num)}
                    sx={sx.button}
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
