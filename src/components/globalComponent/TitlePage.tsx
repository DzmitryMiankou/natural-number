import React from "react";
import { Main, BoxTitlePage } from "../../style/style";
import styled from "styled-components";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { IconButton } from "@mui/material";
import TooltipButt from "../globalComponent/Tooltip";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";

const sx = { icon: { color: "#c15400", fontSize: "45px" } };

interface TypeProp {
  $align: string;
}

const MainVariant = styled(Main)<TypeProp>`
  justify-content: ${(prop) => prop.$align};
`;

interface TypeArr {
  text: string;
  icon: JSX.Element;
}

const arr: Array<TypeArr> = [
  {
    text: "Читать больше",
    icon: <MenuBookIcon sx={sx.icon} />,
  },
  {
    text: "Задания по теме",
    icon: <FormatListNumberedIcon sx={sx.icon} />,
  },
];

const TitlePage = ({
  title,
  boximg,
  alignMain,
  click,
}: {
  title: JSX.Element;
  boximg: JSX.Element;
  alignMain: string;
  click?: any;
}) => {
  return (
    <MainVariant $align={alignMain}>
      <BoxTitlePage>
        <>{title}</>
        <div>
          {arr.map(({ text, icon }, i) => (
            <TooltipButt
              key={i}
              text={text}
              element={<IconButton onClick={click}>{icon}</IconButton>}
            />
          ))}
        </div>
      </BoxTitlePage>
      <>{boximg}</>
    </MainVariant>
  );
};

export default TitlePage;
