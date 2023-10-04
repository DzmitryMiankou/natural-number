import React from "react";
import { Main, BoxTitlePage } from "../../style/style";
import styled from "styled-components";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { IconButton } from "@mui/material";
import TooltipButt from "../globalComponent/Tooltip";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import Window from "./Window";
import WindowHOCButt from "../../HOC/WindowHOCButt";
import { PropType } from "../../HOC/WindowHOCButt";
import { Pann, Akcent } from "../../style/style";
import { SxProps } from "@mui/material";

const sx: { icon: SxProps } = {
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
  @media (max-width: 900px) {
    justify-content: space-around;
  }
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
    text: "Задания для самопроверки",
    icon: <FormatListNumberedIcon sx={sx.icon} />,
  },
];

export type PropTypeText = Array<{
  text: string;
  svg?: string | TrustedHTML | undefined | any;
}>;
export type PropTypeTest = Array<{
  qvest: string;
  answer: string;
  right?: number;
}>;

interface FCpropType {
  params: PropType;
  openWind: boolean;
  dataWind: number;
  handleClickOpenWind: (id: number) => void;
  handleClose: () => void;
}

const TitlePageH: React.FC<FCpropType> = ({
  params,
  openWind,
  dataWind,
  handleClose,
  handleClickOpenWind,
}) => {
  return (
    <MainVariant $align={params.alignMain}>
      <BoxTitlePage>
        <Window
          title={dataWind === 1 ? arr[0].text : arr[1].text}
          dataWind={dataWind}
          open={openWind}
          handleClose={handleClose}
          educationText={params.educationText}
          educationTest={params.educationTest}
        />
        <Pann>
          <Akcent>{params.title.accent}</Akcent>
          {params.title.title}
        </Pann>
        <div>
          {arr.map(({ text, icon, id }) => (
            <TooltipButt
              key={id}
              text={text}
              element={
                <IconButton onClick={(e) => handleClickOpenWind(id)}>
                  {icon}
                </IconButton>
              }
            />
          ))}
        </div>
      </BoxTitlePage>
      <>{params.boximg}</>
    </MainVariant>
  );
};

const TitlePage = WindowHOCButt(TitlePageH);
export default TitlePage;
