import React from "react";
import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";

const Block = styled.div``;

const Header = styled.header`
  height: 50px;
  background-color: #db953a;
  display: flex;
  align-items: center;
`;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1900px;
  padding: 90px 150px;
  margin: auto;
  @media (max-width: 780px) {
    padding: 90px 20px;
  }
`;

const HeaderWrapper = styled.div`
  max-width: 1900px;
  padding: 0px 150px;
  margin: auto;
  width: 100%;
  @media (max-width: 780px) {
    padding: 0px 20px;
  }
`;

const Items = styled.ul`
  display: flex;
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
  min-height: 200px;
  background-color: #6b440055;
  padding: 20px;
`;

const Title = styled.h1`
  padding: 0px 0px 150px 0px;
  max-width: 700px;
  font-weight: 500;
`;

const TitleSpan = styled.span`
  color: #6b4400;
  font-weight: 900;
`;

const TitlePage = () => {
  return (
    <Block>
      <Header>
        <HeaderWrapper>
          <Logo>
            <svg
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 60"
              enableBackground="new 0 0 100 60"
              xmlSpace="preserve"
            >
              <rect x="0" y="0" fill="#D7E9A5" width="60" height="60" />
              <rect x="60" y="0" fill="#47CD85" width="38" height="38" />
              <rect x="60" y="47" fill="#437729" width="15" height="15" />
              <rect x="75" y="38" fill="#BC9241" width="23" height="24" />
              <rect x="60" y="38" fill="#9BE9D7" width="9" height="9" />
              <rect x="69" y="38" fill="#588BE9" width="6" height="6" />
              <rect x="69" y="44" fill="#D84B9A" width="3" height="3" />
              <rect x="72" y="44" fill="#B5B0E9" width="3" height="3" />
            </svg>
          </Logo>
        </HeaderWrapper>
      </Header>
      <MainWrapper>
        <main>
          <Title>
            <TitleSpan>MathPush</TitleSpan> - это продук, который создан помочь
            тебе понять математику
          </Title>
          <h2 style={{ color: "red" }}>
            В ближайшее время сайт будет доработан и переведен на платную форму!
          </h2>
          <p>
            Просто удобный продукт для изучения математики, который никогда вас
            не предаст
          </p>
          <Menu>
            <Items>
              <Item>
                <RouterLink to="five_class">5 класс</RouterLink>
              </Item>
              <Item>
                <RouterLink to="five_class">6 класс</RouterLink>
              </Item>
              <Item>
                <RouterLink to="five_class">7 класс</RouterLink>
              </Item>
              <Item>
                <RouterLink to="five_class">8 класс</RouterLink>
              </Item>
              <Item>
                <RouterLink to="five_class">9 класс</RouterLink>
              </Item>
              <Item>
                <RouterLink to="five_class">10 класс</RouterLink>
              </Item>
              <Item>
                <RouterLink to="five_class">11 класс</RouterLink>
              </Item>
            </Items>
          </Menu>
          <h2>Современные технологии на временем проверенном фундаменте</h2>
          <ProductCards>
            <ProductCard>
              Учебный материал создан на базе школьной программы Республики
              Беларусь
            </ProductCard>
            <ProductCard>
              Текстовая информация сведена к минимуму. Материал насыщен яркими
              авторскими иллюстрациями
            </ProductCard>
            <ProductCard>
              Компьютерные программы генерируют и контролируют выполнение
              интрактивных заданий
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
  );
};

export default TitlePage;
