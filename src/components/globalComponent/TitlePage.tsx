import React from "react";
import { Main, BoxTitlePage } from "../../style/style";
import styled from "styled-components";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { IconButton } from "@mui/material";
import TooltipButt from "../globalComponent/Tooltip";

interface TypeProp {
  $align: string;
}

const MainVariant = styled(Main)<TypeProp>`
  justify-content: ${(prop) => prop.$align};
`;

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
        <TooltipButt
          text="Читать больше"
          element={
            <IconButton onClick={click}>
              <MenuBookIcon sx={{ color: "#c15400", fontSize: "45px" }} />
            </IconButton>
          }
        />
      </BoxTitlePage>
      <>{boximg}</>
    </MainVariant>
  );
};

export default TitlePage;
