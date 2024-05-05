import React from "react";
import styled from "styled-components";
import { Outlet, NavLink as RouterLink } from "react-router-dom";
import TitleSvg from "../TitleSvg";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import ChildCareRoundedIcon from "@mui/icons-material/ChildCareRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

const Block = styled.div`
  background-color: white;
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
  padding: 50px 150px;
  margin: auto;
  text-align: center;
  @media (max-width: 780px) {
    padding: 90px 20px;
  }
`;

const Items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Item = styled.li``;

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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Title = styled.h1`
  padding: 50px 0px 70px 0px;
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

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 70px 0;
  padding: 80px 0px;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(1, auto);
  }
`;

const Client = styled.div`
  min-height: 200px;
  background-color: #ff6a0011;
  border-radius: 40px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const StartPage: React.FC = () => {
  return (
    <Block>
      <MainWrapper>
        <main>
          <Outlet />
          <h2 style={{ color: "red" }}>
            В ближайшее время платформа будет доработана и переведена на платную
            основу!
          </h2>
          <Title>
            <TitleSpan>MathPush</TitleSpan> - математика с интресом
          </Title>
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
          <Box>
            <Client>
              <ChildCareRoundedIcon
                sx={{ fontSize: "80px", color: "#e97400" }}
              />
              <H3>Интересные задания для детей</H3>
            </Client>
            <Client>
              <FamilyRestroomIcon sx={{ fontSize: "80px", color: "#00ab6f" }} />
              <H3>Поможет родителям увлечь своего ребенка математикорй</H3>
            </Client>
            <Client>
              <SchoolRoundedIcon sx={{ fontSize: "80px", color: "#ba00e9" }} />
              <H3>100 способов для учителя сделать свой урок увлекательным</H3>
            </Client>
          </Box>
          <ProductTitle>Более 1000 интерактивных плакатов</ProductTitle>
          <TitleSvg />

          <ProductBlock>
            <ProductTitle>
              Сочетание компьютерных технологий и искусства
            </ProductTitle>
            <ProductCards>
              <ProductCard>
                <picture>
                  <source
                    type="image/png"
                    srcSet="http://localhost:5000/1.png"
                  />
                  <source
                    type="image/webp"
                    srcSet="http://localhost:5000/1.webp"
                  />
                  <Img
                    src="http://localhost:5000/1.2.jpg"
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
                  <source
                    type="image/png"
                    srcSet="http://localhost:5000/3.png"
                  />
                  <source
                    type="image/webp"
                    srcSet="http://localhost:5000/3.2.webp"
                  />
                  <Img
                    src="http://localhost:5000/3.1.jpg"
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
                  <source
                    type="image/png"
                    srcSet="http://localhost:5000/2.png"
                  />
                  <source
                    type="image/webp"
                    srcSet="http://localhost:5000/2.2.webp"
                  />
                  <Img
                    src="http://localhost:5000/2.1.jpg"
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
    </Block>
  );
};

export default StartPage;
