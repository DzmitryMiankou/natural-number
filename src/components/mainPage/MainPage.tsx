import React from "react";
import styled, { keyframes } from "styled-components";
import ImgMain from "../../img/imgMain.svg";
import ImgMain2 from "../../img/imgMain2.svg";
import { useNavigate } from "react-router-dom";

const rotate = keyframes`
  0% {
    opacity: 0;
  };
  100% {
    opacity: 1;
  }
`;

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

const Pann = styled.p`
  text-align: center;
  font-size: 64px;
  color: #e97b00;
  font-weight: 700;
  animation: ${rotate} 1s linear;
`;

const Img = styled.img`
  pointer-events: none;
`;

const P = styled(Pann)``;

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
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 0px 15px;
  &:hover {
    color: #d60005;
    box-shadow: rgba(126, 54, 12, 0.16) 0px 8px 6px,
      rgba(139, 54, 6, 0.23) 0px 8px 6px;
  }
`;

const TitleSpan = styled.span``;

type Arrtype = Array<{ bool: boolean; text: number }>;

const arr: Arrtype = [
  { bool: false, text: 1 },
  { bool: false, text: 5 },
  { bool: true, text: 3 },
];

const arr2: Arrtype = [
  { bool: true, text: 4 },
  { bool: false, text: 7 },
  { bool: false, text: 3 },
];

const MaimPage = () => {
  const navigate = useNavigate();
  const [getImg, setImg] = React.useState<string>(ImgMain);
  const [getText, setText] = React.useState<string>("яблок");
  const [getQvest, setQvest] = React.useState<Arrtype>(arr);
  const [getAnn, setAnn] = React.useState<boolean>(false);

  const handler = (bool: boolean): void => {
    if (bool === false) return;
    if (bool === true) {
      setAnn(!getAnn);
      setImg(ImgMain2);
      setText("морковки");
      setQvest(arr2);
      if (getQvest === arr2) {
        navigate("/numperNat");
      }
    }
  };

  return (
    <Main>
      <Title>
        <TitleSpan>что такое</TitleSpan>
        <TitleSpan>натуральное число</TitleSpan>
      </Title>
      <>
        {getAnn ? (
          <Pann>{`сколько ${getText} вы видите?`}</Pann>
        ) : (
          <P>{`сколько ${getText} вы видите?`}</P>
        )}
      </>
      <Buttons>
        {getQvest.map(({ bool, text }) => (
          <Button key={text} onClick={() => handler(bool)}>
            {text}
          </Button>
        ))}
      </Buttons>
      <Img src={getImg} alt="img" />
    </Main>
  );
};

export default MaimPage;
