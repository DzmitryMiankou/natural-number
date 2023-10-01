import React, { useState } from "react";
import styled from "styled-components";
import PageRoute from "./routes/rotes";
import BG from "./img/backG.svg";
import BG2 from "./img/backG2.svg";
import BG3 from "./img/plusBG.svg";
import QuizIcon from "@mui/icons-material/Quiz";
import { IconButton } from "@mui/material";
import { useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import TemporaryDrawer from "./components/menu/Menu";
import { NavLink as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import Window from "./components/globalComponent/Window";
import data from "./data/twoLevelData.json";
import WindowHOCButt from "./HOC/WindowHOCButt";
import { RequestType } from "./HOC/WindowHOCButt";

interface TypeBG {
  $url: string;
}

const AppDiv = styled.div<TypeBG>`
  min-height: 100vh;
  overflow-y: hidden;
  background-image: ${(prop) => `url(${prop.$url})`};
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow-x: hidden;
`;

const Menu = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
`;

const Footer = styled.footer`
  background-color: var(--color-footerBG);
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const sx = {
  icon: {
    color: "var(--color-orange-icon)",
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
  font-size: ${(p) => (p.$focus ? "14px" : "12px")};
  color: ${(p) =>
    p.$focus
      ? "var(--color-footerText-dark)"
      : "var(--color-footerText-light)"};
`;

const AppH = ({
  openWind,
  dataWind,
  handleClose,
  handleClickOpenWind,
}: RequestType) => {
  const state = useSelector((state: RootState) => state.static);
  const [get, set] = useState<boolean>(false);
  const location = useLocation();

  return (
    <AppDiv
      $url={
        location.pathname === state.main[0].list[1].path
          ? BG2
          : BG && location.pathname === state.main[0].list[2].path
          ? BG3
          : BG
      }
    >
      <Window
        title={"Общий тест"}
        dataWind={dataWind}
        open={openWind}
        handleClose={handleClose}
        educationTest={data[0]?.quiz.educationTest}
      />
      <Menu>
        <TemporaryDrawer />
        <>
          {location.pathname !== "/" ? (
            <Tooltip
              title="Главная"
              TransitionComponent={Fade}
              enterDelay={1500}
              TransitionProps={{ timeout: 600 }}
            >
              <IconButton component={RouterLink} to={"/"}>
                <HomeIcon sx={sx.icon} />
              </IconButton>
            </Tooltip>
          ) : (
            <></>
          )}
        </>
        <Tooltip
          sx={{
            "& .MuiTooltip-tooltip": {
              backgroundColor: "red",
            },
          }}
          title="Тест"
          enterDelay={1500}
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <IconButton onClick={(e) => handleClickOpenWind(e, 2)}>
            <QuizIcon sx={sx.icon} />
          </IconButton>
        </Tooltip>
      </Menu>
      <PageRoute state={state} />
      <Footer onMouseEnter={() => set(true)} onMouseLeave={() => set(false)}>
        <FooterP $focus={get}>{state.main[0].footer}</FooterP>
      </Footer>
    </AppDiv>
  );
};

const App = WindowHOCButt(AppH);
export default App;
