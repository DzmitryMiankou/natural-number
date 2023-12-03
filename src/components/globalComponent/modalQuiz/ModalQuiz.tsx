import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import {
  setQuizAction,
  cleartQuizAction,
} from "../../../redux/storeQuiz/storeQuizReducer";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const AlertDialog: React.FC<{
  handleClose: () => void;
  open: boolean;
  state: any;
}> = ({ handleClose, open, state }) => {
  const dispatch: AppDispatch = useDispatch();
  const stateRedux = useSelector((store: RootState) => store.radio);
  const [getName, setName] = useState<string>("");
  const [getSurname, setSurname] = useState<string>("");
  const [getClass, setClass] = useState<string>("");
  const [getErr, setErr] = useState<"" | "Заполните все поля" | "ok">("");
  const stateRedux2 = useSelector((store: RootState) => store.storeQuiz.data);

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setErr("");
    switch ((event.target as HTMLInputElement).id) {
      case "name":
        setName((event.target as HTMLInputElement).value);
        break;
      case "surname":
        setSurname((event.target as HTMLInputElement).value);
        break;
      case "class":
        setClass((event.target as HTMLInputElement).value);
        break;
      default:
        console.log("ERR_Modal_Quiz");
    }
  };

  const handleSave = React.useCallback(() => {
    if (getName !== "" && getSurname !== "" && getClass !== "") {
      setErr("ok");
      if (stateRedux2.length >= 60) dispatch(cleartQuizAction());

      dispatch(
        setQuizAction({
          dataStud: { name: getName, surname: getSurname, class: getClass },
          quizData: state,
          timeSave: new Date().toLocaleString(),
          errList: stateRedux.err,
        })
      );
      setTimeout(() => {
        handleClose();
        setErr("");
      }, 2000);
      return;
    } else {
      return setErr("Заполните все поля");
    }
  }, [
    dispatch,
    getClass,
    getName,
    getSurname,
    handleClose,
    state,
    stateRedux.err,
    stateRedux2.length,
  ]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => {
          handleClose();
          setErr("");
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {getErr !== "ok" ? (
          <>
            <DialogTitle id="alert-dialog-title">
              {"Вы желаете сохранить результат теста?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Введите свои данные и нажмите на кнопку "сохранить". Это
                позволит вам сохранить ваш результат теста
              </DialogContentText>
            </DialogContent>
            <Typography sx={{ color: "red", marginLeft: "12px" }}>
              {getErr}
            </Typography>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <TextField
                id="name"
                value={getName}
                label="Ваше имя"
                variant="filled"
                onChange={(e) => handleRadioChange(e)}
              />
              <TextField
                id="surname"
                value={getSurname}
                label="Ваша фамилия"
                variant="filled"
                onChange={(e) => handleRadioChange(e)}
              />
              <TextField
                id="class"
                value={getClass}
                label="Ваш класс"
                variant="filled"
                onChange={(e) => handleRadioChange(e)}
              />
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button onClick={handleSave}>Сохранить</Button>
                <Button
                  onClick={() => {
                    handleClose();
                    setErr("");
                  }}
                >
                  Выйти
                </Button>
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Typography
              sx={{
                minHeight: "100px",
                minWidth: "200px",
                color: "green",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              СОХРАНЕНО
            </Typography>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default AlertDialog;
