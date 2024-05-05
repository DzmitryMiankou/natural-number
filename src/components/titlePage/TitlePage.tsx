import React from "react";
import styled, { keyframes } from "styled-components";
import { Outlet, NavLink as RouterLink } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import PersonIcon from "@mui/icons-material/Person";

const Block = styled.div`
  background-color: white;
`;

const Header = styled.header`
  height: 50px;
  background-color: #db953a;
  display: flex;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  max-width: 1900px;
  padding: 0px 150px;
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 780px) {
    padding: 0px 20px;
  }
`;

const Logo = styled.div`
  width: 65px;
  display: block;
`;

const ItemsLink = styled.ul`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const MenuLink = styled(RouterLink)`
  text-decoration: none;
  color: #000000;
  text-transform: uppercase;
  transition: 200ms;
  font-weight: 500;
  &:hover {
    color: #ffffff;
  }
`;

const Footer = styled.footer<{ $bg: string }>`
  background-color: ${(props) => props.$bg};
  min-height: 40px;
`;

const FooterWrapper = styled.div`
  max-width: 1900px;
  padding: 0px 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  margin: auto;
  color: #6b4400;
  @media (max-width: 780px) {
    padding: 0px 20px;
    flex-direction: column-reverse;
  }
`;

const Contact = styled.address`
  display: flex;
  gap: 10px;
  font-style: normal;
`;

const ContactLink = styled.a`
  color: #00546b;
`;

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Round = styled.g`
  transform-origin: 30% 59%;
  animation: ${rotate} 10s linear infinite;
`;

const TitlePage: React.FC = () => {
  return (
    <HelmetProvider>
      <Block>
        <Helmet>
          <title>Mathpush</title>
        </Helmet>
        <Header>
          <HeaderWrapper>
            <Logo>
              <svg
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 97 65"
                enableBackground="new 0 0 97 65"
                xmlSpace="preserve"
              >
                <Round>
                  <path
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    d="M15.1,58.2C8.3,53.9,3.9,46.3,3.9,37.7
		c0-13.4,10.9-24.3,24.3-24.3c4.2,0,8.1,1.1,11.5,2.9"
                  />
                  <path
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    d="M52.1,34c0.2,1.2,0.3,2.5,0.3,3.7
		C52.4,51.1,41.6,62,28.2,62"
                  />
                </Round>
                <polygon
                  fill="#ffffff64"
                  stroke="#000000"
                  strokeWidth="4"
                  strokeMiterlimit="10"
                  points="59.5,6 27.2,62 91.9,62 "
                />
              </svg>
            </Logo>
            <nav>
              <ItemsLink>
                <li>
                  <MenuLink to={"/"}>главная</MenuLink>
                </li>
                <li>
                  <MenuLink to={"messages"}>РОДИТЕЛЯМ</MenuLink>
                </li>
                <li>
                  <MenuLink to={"messages"}>ДЕТЯМ</MenuLink>
                </li>
                <li>
                  <MenuLink to={"messages"}>Учетная запись</MenuLink>
                </li>
                <li>
                  <PersonIcon />
                </li>
              </ItemsLink>
            </nav>
          </HeaderWrapper>
        </Header>
        <Outlet />
        <Footer $bg={"#DB953A"}>
          <FooterWrapper>
            <p>© 2023 - 2024, Дмитрий Меньков</p>
            <p> __VERSION 0.1__</p>
            <Contact>
              <p>Контакты:</p>
              <ContactLink href="mailto: gmiankou@gmail.com">
                gmiankou@gmail.com
              </ContactLink>
            </Contact>
          </FooterWrapper>
        </Footer>
      </Block>
    </HelmetProvider>
  );
};

export default TitlePage;
