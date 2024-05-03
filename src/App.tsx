import React from "react";
import styled from "styled-components";
import PageRoute from "./routes/routes";
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
import { SxProps } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

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

const Menu = styled.menu`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
`;

const Contact = styled.address`
  display: flex;
  gap: 10px;
  font-style: normal;
`;

const Footer = styled.footer<{ $bg: string }>`
  display: grid;
  place-items: center;
  z-index: 99;
  background-color: ${(props) => props.$bg};
  height: 40px;
`;

const FooterWrapper = styled.div`
  max-width: 1900px;
  padding: 0px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #6b4400;
`;

const ContactLink = styled.a`
  color: #00546b;
`;

const sx: { icon: SxProps; tooltip: SxProps } = {
  icon: {
    color: "var(--color-orange-icon)",
    fontSize: "30px",
    transition: "0.2s",
    "&:hover": {
      color: "var(--color-red)",
    },
  },
  tooltip: {
    "& .MuiTooltip-tooltip": {
      backgroundColor: "red",
    },
  },
};

const enum TypeStrTooltip {
  titleQuiztButt = "Обобщающий тест",
  titleMainButt = "Главная",
}

const AppH: React.FC<RequestType> = ({
  openWind,
  dataWind,
  handleClose,
  handleClickOpenWind,
}) => {
  const state = useSelector((state: RootState) => state.static);
  const location = useLocation();

  const chooseVariantBG = (): string => {
    if (location.pathname === state.main[0].list[1].path) return BG2;
    if (location.pathname === state.main[0].list[2].path) return BG3;
    if (location.pathname === "/") return "";
    return BG;
  };

  return (
    <AppDiv $url={chooseVariantBG()}>
      <Window
        title={TypeStrTooltip.titleQuiztButt}
        dataWind={dataWind}
        open={openWind}
        handleClose={handleClose}
        educationTest={data[0]?.quiz.educationTest}
      />
      <>
        {location.pathname !== "/" && (
          <Menu>
            <TemporaryDrawer />
            <Tooltip
              sx={sx.tooltip}
              title={TypeStrTooltip.titleQuiztButt}
              enterDelay={1500}
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
            >
              <IconButton onClick={() => handleClickOpenWind(2)}>
                <QuizIcon sx={sx.icon} />
              </IconButton>
            </Tooltip>
            <>
              {location.pathname !== "/" ? (
                <Tooltip
                  title={TypeStrTooltip.titleMainButt}
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
            <>
              {location.pathname.split("/").length === 3 ? (
                <Tooltip
                  title={"Вернуться к темам"}
                  TransitionComponent={Fade}
                  enterDelay={1500}
                  TransitionProps={{ timeout: 600 }}
                >
                  <IconButton
                    component={RouterLink}
                    to={location.pathname.split("/")[1]}
                  >
                    <ArrowCircleLeftOutlinedIcon sx={sx.icon} />
                  </IconButton>
                </Tooltip>
              ) : (
                <></>
              )}
            </>
          </Menu>
        )}
      </>

      <PageRoute state={state} />
      <>
        {location.pathname !== "/" ? (
          <Footer $bg={"var(--color-footerBG)"}>
            <FooterWrapper>
              <p>{state.main[0].footer}</p>
              <p> __VERSION 0.1__</p>
              <Contact>
                <p>Контакты:</p>
                <ContactLink href="mailto: gmiankou@gmail.com">
                  gmiankou@gmail.com
                </ContactLink>
              </Contact>
            </FooterWrapper>
          </Footer>
        ) : (
          <></>
        )}
      </>
    </AppDiv>
  );
};

const App = WindowHOCButt(AppH);
export default App;
