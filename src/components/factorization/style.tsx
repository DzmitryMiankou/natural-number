import { P } from "../../style/style";
import styled from "styled-components";

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

const PVariant2 = styled(P)`
  margin-bottom: 35px;
  @media (max-width: 1600px) {
    font-size: 26px;
  }
`;

export const ST = { Box, PVariant2 };
