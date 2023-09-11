import React, { useState } from "react";
import styled from "styled-components";
import PageRoute from "./routes/rotes";
import BG from "./img/backG.svg";
import QuizIcon from "@mui/icons-material/Quiz";
import { Button } from "@mui/material";

import TemporaryDrawer from "./components/menu/Menu";

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

interface Prop {
  $focus: boolean;
}

const FooterP = styled.p<Prop>`
  transition: 0.2s;
  color: ${(p) => (p.$focus ? "#5b462e" : "#cd9f6b")};
`;

const App = () => {
  const [get, set] = useState<boolean>(false);

  return (
    <AppDiv>
      <Menu>
        <TemporaryDrawer />
        <Button>
          <QuizIcon
            sx={{
              color: "#e97b02",
              fontSize: "30px",
              transition: "0.2s",
              "&:hover": {
                color: "#d60005",
              },
            }}
          />
        </Button>
      </Menu>
      <PageRoute />
      <Footer onMouseEnter={() => set(true)} onMouseLeave={() => set(false)}>
        <FooterP
          $focus={get}
        >{`© 2022 - ${new Date().getFullYear()}, Дмитрий Меньков, г. Молодечно`}</FooterP>
      </Footer>
    </AppDiv>
  );
};

export default App;
