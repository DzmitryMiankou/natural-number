import React from "react";
import styled from "styled-components";
import Img1 from "../../img/aaa.svg";
import { Button, Box } from "@mui/material";
import SimpleDialog from "./dialog";
import { P, sxGroupButton } from "../../style/style";
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
  boxButton: { display: "flex", gap: "5px" },
  button: sxGroupButton.button,
};

const OnePage = () => {
  const [open, setOpen] = React.useState<"ok" | "err" | "">("");

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
