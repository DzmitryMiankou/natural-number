import React from "react";
import Dialog from "@mui/material/Dialog";
import {
  Divider,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Tooltip,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import AllList from "../../../data/twoLevelData.json";
import { SxProps } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { cleartQuizAction } from "../../../redux/storeQuiz/storeQuizReducer";
import Fade from "@mui/material/Fade";

const SX: { appBar: SxProps; boxTimeNumber: SxProps; boxDataUser: SxProps } = {
  appBar: {
    position: "relative",
    backgroundColor: "#e07600",
  },
  boxTimeNumber: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    backgroundColor: "#fdc483",
    padding: "5px",
    borderRadius: "40px",
    width: "fit-content",
    margin: "16px 0",
  },
  boxDataUser: { display: "flex", gap: "30px", margin: "16px 0" },
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog: React.FC<{
  handleCloseW: () => void;
  openW: boolean;
  stateQuiz: any;
}> = ({ handleCloseW, openW, stateQuiz }) => {
  const AllListLength = AllList[0]?.quiz?.educationTest?.length;
  const dispatch: AppDispatch = useDispatch();

  const clearState = () => {
    handleCloseW();
    dispatch(cleartQuizAction());
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={openW}
        onClose={handleCloseW}
        TransitionComponent={Transition}
      >
        <AppBar component={"div"} sx={SX.appBar}>
          <Toolbar>
            <Typography sx={{ fontSize: "25px" }}>Список ответов</Typography>
            <Box
              sx={{
                marginLeft: "auto",
                display: "flex",
                gap: "20px",
              }}
            >
              <Tooltip
                title={"Удалить все данные"}
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
              >
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={clearState}
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleCloseW}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Box sx={{ padding: "17px" }}>
          {stateQuiz?.data?.map(
            ({ dataStud, errList, timeSave }: any, i: number) => (
              <React.Fragment key={i}>
                <Box sx={{ flexDirection: "column", alignItems: "flex-start" }}>
                  <Box sx={SX.boxTimeNumber}>
                    <Typography sx={{ fontSize: "20px" }}>{`№: ${
                      i + 1
                    }`}</Typography>
                    <Typography
                      sx={{ color: "#000a62" }}
                    >{`Время сохранения: ${timeSave}`}</Typography>
                  </Box>
                  <Box sx={SX.boxDataUser}>
                    {[
                      { str: "Фамилия", data: dataStud.surname },
                      { str: "Имя", data: dataStud.name },
                      { str: "Класс", data: dataStud.class },
                    ].map(({ str, data }, i) => (
                      <Typography
                        sx={{ fontSize: "20px" }}
                        key={`${i}-quizList`}
                      >
                        <Box
                          sx={{ fontSize: "22px", color: "#008ae0" }}
                          component={"span"}
                        >{`${str}`}</Box>
                        {`: ${data}`}
                      </Typography>
                    ))}
                  </Box>
                  <Typography>{`Всего вопросов: ${AllListLength}. Правильных: ${
                    AllListLength - errList?.length
                  }. Процент верных ответов: ${Math.floor(
                    ((AllListLength - errList?.length) / AllListLength) * 100
                  )}`}</Typography>
                  <ul>
                    {AllList[0]?.quiz.educationTest.map(
                      ({ qvest }, i: number) => (
                        <li key={`LwQuizList${i}`}>
                          <Typography
                            sx={{
                              color:
                                qvest ===
                                errList?.find((e: string) => e === qvest)
                                  ? "red"
                                  : "green",
                            }}
                          >{`${i + 1}. ${qvest}`}</Typography>
                        </li>
                      )
                    )}
                  </ul>
                </Box>
                <Divider />
              </React.Fragment>
            )
          )}
        </Box>
      </Dialog>
    </div>
  );
};

export default FullScreenDialog;
