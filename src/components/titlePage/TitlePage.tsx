import React from "react";
import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";

const Block = styled.div`
  height: calc(100vh - 40px);
`;

const Header = styled.header`
  height: 50px;
  background-color: #92a7c6;
  display: flex;
  align-items: center;
`;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1900px;
  margin: auto;
  padding: 90px 150px;
`;

const HeaderWrapper = styled.div`
  max-width: 1900px;
  padding: 0px 150px;
`;

const Items = styled.ul`
  display: flex;
  gap: 20px;
`;

const Item = styled.li``;

const TitlePage = () => {
  return (
    <Block>
      <Header>
        <HeaderWrapper>
          <div>MathNext</div>
        </HeaderWrapper>
      </Header>
      <MainWrapper>
        <main>
          <h1>
            MathNext - это продук, который создан помочь тебе понять математику
          </h1>
          <p>
            Просто удобный продукт для изучения математики, который никогда вас
            не предаст
          </p>
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
        </main>
      </MainWrapper>
    </Block>
  );
};

export default TitlePage;
