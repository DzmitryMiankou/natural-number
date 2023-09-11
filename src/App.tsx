import React, { useState } from "react";
import styled from "styled-components";
import PageRoute from "./routes/rotes";
import BG from "./img/backG.svg";

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
  cursor: pointer;
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
