import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { clearRadioAction } from "../redux/radioReducer/RadioReducer";
import {
  PropTypeTest,
  PropTypeText,
} from "../components/globalComponent/TitlePage";

export type PropType<T> = {
  title: T;
  boximg: T;
  alignMain: string;
  educationText?: PropTypeText;
  educationTest?: PropTypeTest;
};

export type RequestType = {
  params?: PropType<JSX.Element>;
  openWind: boolean;
  dataWind: number;
  handleClickOpenWind: (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const WindowHOCButt = (OriginalComponent: FC<any>) => {
  function NewComponent(params: PropType<JSX.Element> | {}) {
    const dispatch: AppDispatch = useDispatch();
    const [openWind, setOpenWind] = React.useState<boolean>(false);
    const [dataWind, setDatanWind] = React.useState<number>();

    const handleClose = (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault();
      dispatch(clearRadioAction());
      return setOpenWind(false);
    };

    const handleClickOpenWind = (
      e: React.MouseEvent<HTMLButtonElement>,
      id: number
    ): void => {
      e.preventDefault();
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
