import React from "react";
import styled from "styled-components";
import Img1 from "../../img/aaa.svg";
import { Button, Box } from "@mui/material";
import SimpleDialog from "./dialog";
import { Pann, Akcent, P } from "../../style/style";
import TitlePage from "../globalComponent/TitlePage";
import data from "../../data/twoLevelData.json";

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

const Img = styled.img``;

const sx = {
  button: {
    color: "var(--color-orange-button)",
    border: "solid 1px  var(--color-orange-button)",
    background: "var(--color-BG-button)",
    fontSize: "18px",
    "&:hover": { background: "#fffaf6", border: "solid 1px  #ff6f00" },
  },
};

const OnePage = () => {
  const [open, setOpen] = React.useState<string>("");

  const handleClickOpen = (
    e: React.MouseEvent<HTMLButtonElement>,
    num: number
  ) => {
    e.preventDefault();
    return num === 3 ? setOpen("ok") : setOpen("err");
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    return setOpen("");
  };

  const sortRandomArr = () => {
    return [2, 5, 3].sort(() => Math.random() - 0.5);
  };

  const state = data[0].naturalData;

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
        <BoxQvest>
          <PVariant>{state.qvest}</PVariant>
          <SimpleDialog opens={open} handleClose={handleClose} />
          <Box sx={{ display: "flex", gap: "5px" }}>
            {sortRandomArr().map((num, i) => (
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
          <Img src={Img1} alt="img" />
        </BoxQvest>
      }
    />
  );
};

export default OnePage;
