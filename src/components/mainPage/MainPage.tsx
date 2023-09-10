import React from "react";
import styled from "styled-components";
import ImgMain from "../../img/imgMain.svg";
import ImgMain2 from "../../img/imgMain2.svg";

const Main = styled.main`
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-size: 74px;
  display: flex;
  flex-direction: column;
  color: #d60005;
  font-weight: 800;
`;

const P = styled.p`
  text-align: center;
  font-size: 64px;
  color: #e97b00;
  font-weight: 700;
`;

const Buttons = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 30vw;
`;

const Button = styled.li`
  color: #e97b00;
  font-size: 64px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;
  list-style: none;
  &:hover {
    color: #d60005;
  }
`;

const TitleSpan = styled.span``;

type Arrtype = Array<{ bool: boolean; text: number }>;

const arr: Arrtype = [
  { bool: false, text: 1 },
  { bool: false, text: 5 },
  { bool: true, text: 3 },
];

const MaimPage = () => {
  const [getImg, setImg] = React.useState<string>(ImgMain);
  const [getText, setText] = React.useState<string>("яблок");
  const [getQvest, setAvest] = React.useState<Arrtype>(arr);

  const handler = (bool: boolean): void => {
    if (bool === false) return;
    if (bool === true) {
      setImg(ImgMain2);
      setText("морковки");
    }
  };

  return (
    <Main>
      <Title>
        <TitleSpan>что такое</TitleSpan>
        <TitleSpan>натуральное число</TitleSpan>
      </Title>
      <P>{`сколько ${getText} вы видите?`}</P>
      <Buttons>
        {getQvest.map(({ bool, text }) => (
          <Button key={text} onClick={() => handler(bool)}>
            {text}
          </Button>
        ))}
      </Buttons>
      <img src={getImg} alt="img"></img>
    </Main>
  );
};

export default MaimPage;
