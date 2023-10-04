import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { clearRadioAction } from "../redux/radioReducer/RadioReducer";
import {
  PropTypeTest,
  PropTypeText,
} from "../components/globalComponent/TitlePage";

export type PropType = {
  title: { title: string; accent: string };
  boximg: JSX.Element;
  alignMain:
    | "space-between"
    | "space-around"
    | "center"
    | "start"
    | "space-evenly";
  educationText: PropTypeText;
  educationTest: PropTypeTest;
};

export type RequestType = {
  params: PropType;
  openWind: boolean;
  dataWind: number;
  handleClickOpenWind: (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
  handleClose: () => void;
};

const WindowHOCButt = (OriginalComponent: FC<RequestType | any>) => {
  function NewComponent(params: PropType | {}) {
    const dispatch: AppDispatch = useDispatch();
    const [openWind, setOpenWind] = useState<boolean>(false);
    const [dataWind, setDatanWind] = useState<number>();

    const handleClose = (): void => {
      dispatch(clearRadioAction());
      return setOpenWind(false);
    };

    const handleClickOpenWind = (id: number): void => {
      setDatanWind(id);
      return setOpenWind(true);
    };

    return (
      <OriginalComponent
        handleClose={handleClose}
        handleClickOpenWind={handleClickOpenWind}
        dataWind={dataWind}
        openWind={openWind}
        params={params}
      />
    );
  }
  return NewComponent;
};

export default WindowHOCButt;
