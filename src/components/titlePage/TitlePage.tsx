import React from "react";
import styled, { keyframes } from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import PersonIcon from "@mui/icons-material/Person";
import Img1 from "../../img/1.webp";
import Img11 from "../../img/1.png";
import Img12 from "../../img/1.2.jpg";
import Img2 from "../../img/2.png";
import Img21 from "../../img/2.1.jpg";
import Img22 from "../../img/2.2.webp";
import Img3 from "../../img/3.png";
import Img31 from "../../img/3.1.jpg";

const Block = styled.div`
  background-color: white;
`;

const Header = styled.header`
  height: 50px;
  background-color: #db953a;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  overflow-clip-margin: content-box;
  overflow: clip;
  height: auto;
`;

const H3 = styled.h3`
  padding: 10px;
  font-size: 25px;
  font-weight: 900;
  line-height: 120%;
  word-wrap: break-word;
  letter-spacing: -1px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1900px;
  padding: 90px 150px;
  margin: auto;
  text-align: center;
  @media (max-width: 780px) {
    padding: 90px 20px;
  }
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

const Items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Logo = styled.div`
  width: 65px;
  display: block;
`;

const Menu = styled(Logo)`
  width: 100%;
  display: block;
`;

const ItemsLink = styled.ul`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: #000000;
  text-transform: uppercase;
  transition: 200ms;
  font-weight: 500;
  &:hover {
    color: #ffffff;
  }
`;

const Item = styled.li``;

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

const ProductBlock = styled.div`
  margin: 120px 0px;
`;

const ProductTitle = styled.h2`
  padding: 0px 0px 60px 0px;
  max-width: 900px;
  font-weight: 700;
  margin: auto;
  line-height: 100%;
  font-weight: 900;
  letter-spacing: -2px;
  text-align: center;
  font-size: 60px;
  @media (max-width: 600px) {
    font-size: 40px;
  }
`;

const ProductCards = styled.div`
  display: grid;
  justify-content: center;
  gap: 25px;
  grid-template-columns: repeat(3, auto);
  @media (max-width: 1100px) {
    grid-template-columns: repeat(1, auto);
  }
`;

const ProductCard = styled.div`
  min-width: 200px;
  min-height: 300px;
  border-radius: 20px;
  background-color: #b26d1429;
  overflow: hidden;
  max-width: 450px;
`;

const Title = styled.h1`
  padding: 0px 0px 120px 0px;
  max-width: 900px;
  margin: auto;
  line-height: 100%;
  font-weight: 900;
  letter-spacing: -2px;
  text-align: center;
  font-size: 70px;
  @media (max-width: 600px) {
    font-size: 50px;
  }
`;

const TitleSpan = styled.span`
  color: #b26d14;
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

const Link = styled(RouterLink)`
  display: block;
  text-decoration: none;
  background-color: #b26d14;
  padding: 5px 25px;
  color: white;
  font-size: 20px;
  transition: 0.2s;
  border-radius: 5px;
  &:hover {
    background-color: #75501f;
  }
`;

const move = keyframes`
  0% { stroke-dashoffset: 2500;}
  100% { stroke-dashoffset: 0;}
`;

const move2 = keyframes`
  0% { stroke-dashoffset: 2500;}
  60% { stroke-dashoffset: 2500;}
  100% { stroke-dashoffset: 0;}
`;

const MainSVG = styled.div`
  display: block;
  max-width: 400px;
  margin: auto;
`;

const Poly = styled.polygon`
  stroke-dasharray: 2500;
  animation: ${move} 3s linear;
`;

const Line = styled.line`
  stroke-dasharray: 2500;
  animation: ${move2} 5s linear;
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
                  <MenuLink href="#">РОДИТЕЛЯМ</MenuLink>
                </li>
                <li>
                  <MenuLink href="#">ДЕТЯМ</MenuLink>
                </li>
                <li>
                  <MenuLink href="#">Учетная запись</MenuLink>
                </li>
                <li>
                  <PersonIcon />
                </li>
              </ItemsLink>
            </nav>
          </HeaderWrapper>
        </Header>
        <MainWrapper>
          <main>
            <Title>
              <TitleSpan>MathPush</TitleSpan> - математика с интресом
            </Title>
            <MainSVG>
              <svg
                x="0px"
                y="0px"
                viewBox="0 -20 1067 700"
                enableBackground="new 0 -20 1067 700"
                xmlSpace="preserve"
              >
                <g>
                  <Poly
                    fill="none"
                    stroke="#8c8c8c"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    points="915,564.8 
		31,564.8 320.5,51.2 619.5,51.2 	"
                  />
                  <circle
                    fill="none"
                    stroke="#8c8c8c"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    cx="473"
                    cy="306.8"
                    r="255"
                  />

                  <Line
                    fill="none"
                    stroke="#8c8c8c"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    x1="473.2"
                    y1="308.2"
                    x2="31.2"
                    y2="564.2"
                  />
                  <line
                    fill="none"
                    stroke="#8c8c8c"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    x1="473.5"
                    y1="561.5"
                    x2="474.8"
                    y2="308.2"
                  />
                  <circle cx="474" cy="313" r="9.5" fill="#5c5c5c" />
                  <text
                    fill="#8c8c8c"
                    transform="matrix(1 0 0 1 450 290)"
                    fontSize="63.9423px"
                  >
                    O
                  </text>
                  <text
                    fill="#8c8c8c"
                    transform="matrix(1 0 0 1 10 620)"
                    fontSize="63.9423px"
                  >
                    A
                  </text>
                  <text
                    transform="matrix(1 0 0 1 300 40)"
                    fontSize="63.9423px"
                    fill="#8c8c8c"
                  >
                    B
                  </text>
                  <text
                    transform="matrix(1 0 0 1 600 40)"
                    fontSize="63.9423px"
                    fill="#8c8c8c"
                  >
                    C
                  </text>
                  <text
                    transform="matrix(1 0 0 1 900 620)"
                    fontSize="63.9423px"
                    fill="#8c8c8c"
                  >
                    D
                  </text>
                  <text
                    transform="matrix(1 0 0 1 450 620)"
                    fontSize="63.9423px"
                    fill="#8c8c8c"
                  >
                    M
                  </text>
                </g>
              </svg>
            </MainSVG>

            <Menu>
              <ProductTitle>Более 1000 интерактивных плакатов</ProductTitle>
              <Items>
                <Item>
                  <Link to="five_class">5 класс</Link>
                </Item>
                <Item>
                  <Link to="five_class">6 класс</Link>
                </Item>
                <Item>
                  <Link to="five_class">7 класс</Link>
                </Item>
                <Item>
                  <Link to="five_class">8 класс</Link>
                </Item>
                <Item>
                  <Link to="five_class">9 класс</Link>
                </Item>
                <Item>
                  <Link to="five_class">10 класс</Link>
                </Item>
                <Item>
                  <Link to="five_class">11 класс</Link>
                </Item>
              </Items>
            </Menu>
            <h2 style={{ color: "red" }}>
              В ближайшее время платформа будет доработана и переведена на
              платную основу!
            </h2>
            <ProductBlock>
              <ProductTitle>
                Сочетание компьютерных технологий и искусства
              </ProductTitle>
              <ProductCards>
                <ProductCard>
                  <picture>
                    <source type="image/png" srcSet={Img11} />
                    <source type="image/webp" srcSet={Img1} />
                    <Img
                      src={Img12}
                      alt="img"
                      height="225"
                      width="400"
                      loading="lazy"
                    />
                  </picture>
                  <H3>
                    Создано на основе школьной программы Республики Беларусь
                  </H3>
                </ProductCard>
                <ProductCard>
                  <picture>
                    <source type="image/png" srcSet={Img3} />
                    <source type="image/webp" srcSet={Img1} />
                    <Img
                      src={Img31}
                      alt="img"
                      height="225"
                      width="400"
                      loading="lazy"
                    />
                  </picture>
                  <H3>Украшено анимированными иллюстрациями</H3>
                </ProductCard>
                <ProductCard>
                  <picture>
                    <source type="image/png" srcSet={Img2} />
                    <source type="image/webp" srcSet={Img22} />
                    <Img
                      src={Img21}
                      alt="img"
                      height="225"
                      width="400"
                      loading="lazy"
                    />
                  </picture>
                  <H3>Компьютер генерирует и проверяет задания</H3>
                </ProductCard>
              </ProductCards>
            </ProductBlock>
          </main>
        </MainWrapper>
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
