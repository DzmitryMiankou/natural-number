import { P } from "../../style/style";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  @media (max-width: 1000px) {
    width: 120vw;
    transform: translateX(15px);
  }
  @media (max-width: 700px) {
    width: 140vw;
    transform: translateX(25px);
  }
`;

const Block = styled.div`
  display: block;
`;

const PVariant2 = styled(P)`
  margin-bottom: 35px;
  @media (max-width: 1600px) {
    font-size: 26px;
  }
`;

export const ST = { Box, Block, PVariant2 };
