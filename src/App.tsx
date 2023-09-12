import React, { useState } from "react";
import styled from "styled-components";
import PageRoute from "./routes/rotes";
import BG from "./img/backG.svg";
import QuizIcon from "@mui/icons-material/Quiz";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import TemporaryDrawer from "./components/menu/Menu";
import { NavLink as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const AppDiv = styled.div`
  min-height: 100vh;
  overflow-y: hidden;
  background-image: url(${BG});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Menu = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
`;

const Footer = styled.footer`
  background-color: #cd9f6b;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const sx = {
  icon: {
    color: "#e97b02",
    fontSize: "30px",
    transition: "0.2s",
    "&:hover": {
      color: "var(--color-red)",
    },
  },
};

interface Prop {
  $focus: boolean;
}

const FooterP = styled.p<Prop>`
  transition: 0.2s;
  color: ${(p) => (p.$focus ? "#5b462e" : "#cd9f6b")};
`;

const App = () => {
  const state = useSelector((state: RootState) => state.static);
  const [get, set] = useState<boolean>(false);
  const location = useLocation();

  return (
    <AppDiv>
      <Menu>
        <TemporaryDrawer />
        <>
          {location.pathname !== "/" ? (
            <Button component={RouterLink} to={"/"} title="button">
              <HomeIcon sx={sx.icon} />
            </Button>
          ) : (
            <></>
          )}
        </>
        <Button title="button">
          <QuizIcon sx={sx.icon} />
        </Button>
      </Menu>
      <PageRoute state={state} />
      <Footer onMouseEnter={() => set(true)} onMouseLeave={() => set(false)}>
        <FooterP $focus={get}>{state.main[0].footer}</FooterP>
      </Footer>
    </AppDiv>
  );
};

export default App;
