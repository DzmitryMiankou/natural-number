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
  id: number;
  text: string;
  icon: JSX.Element;
}

const arr: Array<TypeArr> = [
  { id: 1, text: "Читать больше", icon: <MenuBookIcon sx={sx.icon} /> },
  {
    id: 2,
    text: "Задания по теме",
    icon: <FormatListNumberedIcon sx={sx.icon} />,
  },
];

const TitlePage = ({
  title,
  boximg,
  alignMain,
  educationText,
  educationTest,
}: {
  title: JSX.Element;
  boximg: JSX.Element;
  alignMain: string;
  educationText?: string;
  educationTest?: string;
}) => {
  const [openWind, setOpenWind] = React.useState<boolean>(false);
  const [dataWind, setDatanWind] = React.useState<any>();

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    return setOpenWind(false);
  };

  const handleClickOpenWind = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    setDatanWind(id);
    return setOpenWind(true);
  };

  return (
    <MainVariant $align={alignMain}>
      <BoxTitlePage>
        <Window
          title={dataWind === 1 ? arr[0].text : arr[1].text}
          open={openWind}
          handleClose={handleClose}
          educationData={dataWind === 1 ? educationText : educationTest}
        />
        <>{title}</>
        <div>
          {arr.map(({ text, icon, id }) => (
            <TooltipButt
              key={id}
              text={text}
              element={
                <IconButton onClick={(e) => handleClickOpenWind(e, id)}>
                  {icon}
                </IconButton>
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
