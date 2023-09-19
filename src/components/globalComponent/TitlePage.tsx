import React from "react";
import { Main, BoxTitlePage } from "../../style/style";
import styled from "styled-components";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { IconButton } from "@mui/material";
import TooltipButt from "../globalComponent/Tooltip";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import Window from "./Window";

const sx = {
  icon: {
    color: "var(--color-red-accent)",
    fontSize: "45px",
    "@media (max-width: 1600px)": {
      fontSize: "34px",
    },
  },
};

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
}: {
  title: JSX.Element;
  boximg: JSX.Element;
  alignMain: string;
}) => {
  const [openWind, setOpenWind] = React.useState<boolean>(false);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    return setOpenWind(false);
  };

  const handleClickOpenWind = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    return setOpenWind(true);
  };

  return (
    <MainVariant $align={alignMain}>
      <BoxTitlePage>
        <Window open={openWind} handleClose={handleClose} />
        <>{title}</>
        <div>
          {arr.map(({ text, icon }, i) => (
            <TooltipButt
              key={i}
              text={text}
              element={
                <IconButton onClick={handleClickOpenWind}>{icon}</IconButton>
              }
            />
          ))}
        </div>
      </BoxTitlePage>
      <>{boximg}</>
    </MainVariant>
  );
};

export default TitlePage;
