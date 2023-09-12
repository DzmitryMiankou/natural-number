import React from "react";
import styled, { keyframes } from "styled-components";
import Img1 from "../../img/aaa.svg";
import { Button, Box } from "@mui/material";
import SimpleDialog from "./dialog";

const rotate = keyframes`
  0% {
    opacity: 0;
  };
  100% {
    opacity: 1;
  }
`;

const Main = styled.main`
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Pann = styled.p`
  text-align: center;
  font-size: 44px;
  color: var(--color-yellow-title);
  font-weight: 700;
  width: 70vw;
  animation: ${rotate} 1s linear;
`;

const P = styled.p`
  text-align: center;
  font-size: 34px;
  color: #ff6f00;
  font-weight: 700;
`;

const BoxQvest = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${rotate} 1s linear;
`;

const Akcent = styled.span`
  color: var(--color-red);
`;

const sx = {
  button: {
    color: "#ff6f00",
    border: "solid 1px  #ff6f00",
    background: "#ffdcc2",
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
    num === 3 ? setOpen("ok") : setOpen("err");
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    return setOpen("");
  };

  return (
    <Main>
      <Pann>
        <Akcent>Натурьльные числа</Akcent> — это числа, которые используются при
        счёте предметов
      </Pann>
      <BoxQvest>
        <P>Сколько яблок осталось собрать?</P>
        <SimpleDialog opens={open} handleClose={handleClose} />
        <Box sx={{ display: "flex", gap: "5px" }}>
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
        <img src={Img1} alt="img" />
      </BoxQvest>
    </Main>
  );
};

export default OnePage;
