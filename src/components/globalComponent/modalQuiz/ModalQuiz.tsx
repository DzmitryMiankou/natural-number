import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { setQuizAction } from "../../../redux/storeQuiz/storeQuizReducer";

export default function AlertDialog({ handleClose, open, state }: any) {
  const dispatch: AppDispatch = useDispatch();
  const [getName, setName] = React.useState<string>("");
  const [getSurname, setSurname] = React.useState<string>("");
  const [getClass, setClass] = React.useState<string>("");

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
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
        alert("Нет таких значений");
    }
  };

  const handleSave = () => {
    if (getName !== "" && getSurname !== "" && getClass !== "") {
      dispatch(
        setQuizAction({
          dataStud: { name: getName, surname: getSurname, class: getClass },
          quizData: state,
          timeSave: new Date().toLocaleString(),
        })
      );
    } else {
      return;
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Вы желаете сохранить результат теста?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Введите свои данные и нажмите на кнопку "сохранить". Это позвалит
            вам сохранить ваш результат теста
          </DialogContentText>
        </DialogContent>
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
            <Button onClick={handleClose}>Выйти</Button>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}
