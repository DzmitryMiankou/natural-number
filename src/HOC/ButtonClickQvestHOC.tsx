import React, { FC, useState } from "react";

const enum OkErrType {
  ok,
  err,
}

type OkErrTypeStrings = keyof typeof OkErrType;
export type ReturnPropType = {
  handleClose: () => void;
  open: OkErrTypeStrings | "";
  handleClickOpen: (numb: number, comprasionNumb: number) => void;
};

const ButtonClickQvestHOC = (OriginalComponent: FC<ReturnPropType>) => {
  function NewComponent() {
    const [open, setOpen] = useState<OkErrTypeStrings | "">("");

    const handleClickOpen = (numb: number, comprasionNumb: number) =>
      numb === comprasionNumb ? setOpen("ok") : setOpen("err");

    const handleClose = () => setOpen("");

    return (
      <OriginalComponent
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
        open={open}
      />
    );
  }
  return NewComponent;
};

export default ButtonClickQvestHOC;
