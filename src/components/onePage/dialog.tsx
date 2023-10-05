import React from "react";
import Modal from "../globalComponent/Modal";

const SimpleDialog: React.FC<{
  opens: string;
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ opens, handleClose }) => {
  if (opens === "err")
    return (
      <Modal handleClose={handleClose} opens={opens} text={"Неправильно"} />
    );
  if (opens === "ok")
    return <Modal handleClose={handleClose} opens={opens} text={"Правильно"} />;
  return <></>;
};

export default SimpleDialog;
