import React from "react";
import styled, { keyframes } from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import PersonIcon from "@mui/icons-material/Person";
import Img1 from "../../img/1.webp";
import Img11 from "../../img/1.png";
import Img12 from "../../img/1.2.jpg";

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

const Items2 = styled.ul`
  display: flex;
  gap: 15px;
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

const ProductCards = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, auto);
  @media (max-width: 1100px) {
    grid-template-columns: repeat(1, auto);
  }
`;

const ProductCard = styled.div`
  min-width: 200px;
  min-height: 300px;
  border-radius: 30px;
  background-color: #b26d143b;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  overflow: hidden;
`;

const Title = styled.h1`
  padding: 0px 0px 120px 0px;
  max-width: 900px;
  font-weight: 700;
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
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:hover {
    background-color: #75501f;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12);
  }
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
              <Items2>
                <li>
                  <a href="#">РОДИТЕЛЯМ</a>
                </li>
                <li>
                  <a href="#">ДЕТЯМ</a>
                </li>
                <li>
                  <PersonIcon />
                </li>
              </Items2>
            </nav>
          </HeaderWrapper>
        </Header>
        <MainWrapper>
          <main>
            <Title>
              <TitleSpan>MathPush</TitleSpan> - математика с интресом
            </Title>
            <Menu>
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
              В ближайшее время сайт будет доработан и переведен на платную
              форму!
            </h2>
            <p>
              Просто удобный продукт для изучения математики, который никогда
              вас не предаст
            </p>

            <h2>Современные технологии на временем проверенном фундаменте</h2>
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
                <h3>
                  Учебный материал создан на базе школьной программы Республики
                  Беларусь
                </h3>
              </ProductCard>
              <ProductCard>
                <h3>
                  Текстовая информация сведена к минимуму. Материал насыщен
                  яркими авторскими иллюстрациями
                </h3>
              </ProductCard>
              <ProductCard>
                <h3>
                  Компьютерные программы генерируют и контролируют выполнение
                  интрактивных заданий
                </h3>
              </ProductCard>
            </ProductCards>
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
