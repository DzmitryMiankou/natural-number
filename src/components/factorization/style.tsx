import { P } from "../../style/style";
import styled from "styled-components";

const Box = styled.div<{ $gridTemplateColumns: string }>`
  display: grid;
  grid-template-columns: ${(props) => props.$gridTemplateColumns};
  gap: 20px;
  justify-content: center;
`;

const Block = styled.div`
  display: block;
`;

const InputBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 10px;
`;

const Input = styled.input<{ $rightColor: string }>`
  text-align: center;
  width: 20px;
  border-radius: 0px;
  border: ${(prop) => prop.$rightColor} 1px solid;
  &:focus {
    outline: none;
  }
`;

const PVariant2 = styled(P)`
  margin-bottom: 35px;
  @media (max-width: 1600px) {
    font-size: 26px;
  }
`;

export const ST = { Box, PVariant2, Block, Input, InputBlock };