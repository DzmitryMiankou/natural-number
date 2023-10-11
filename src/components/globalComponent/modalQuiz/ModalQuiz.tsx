import React from "react";
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

export default function AlertDialog({ handleClose, open, state }: any) {
  const dispatch: AppDispatch = useDispatch();
  const [getName, setName] = React.useState<string>("");
  const [getSurname, setSurname] = React.useState<string>("");
  const [getClass, setClass] = React.useState<string>("");
  const stateRedux = useSelector((store: RootState) => store.radio);
  const [getErr, setErr] = React.useState<string>("");
  const stateRedux2: any = useSelector(
    (store: RootState) => store.storeQuiz.data
  );

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

  const handleSave = () => {
    if (getName !== "" && getSurname !== "" && getClass !== "") {
      setErr("ok");
      if (stateRedux2.length >= 60) {
        dispatch(cleartQuizAction());
      }
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
  };

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
                позвалит вам сохранить ваш результат теста
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
              sx={{ minWidth: "200px", color: "green", textAlign: "center" }}
            >
              СОХРАНЕНО
            </Typography>
            <Button
              onClick={() => {
                handleClose();
                setErr("");
              }}
            >
              Выйти
            </Button>
          </>
        )}
      </Dialog>
    </div>
  );
}
