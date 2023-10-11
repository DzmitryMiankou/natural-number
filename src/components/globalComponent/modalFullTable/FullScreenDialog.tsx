import * as React from "react";
import Dialog from "@mui/material/Dialog";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import AllList from "../../../data/twoLevelData.json";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({
  handleCloseW,
  openW,
  stateQuiz,
}: any) {
  return (
    <div>
      <Dialog
        fullScreen
        open={openW}
        onClose={handleCloseW}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "#e07600" }}>
          <Toolbar>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleCloseW}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
          {stateQuiz?.data?.map(
            ({ dataStud, errList, timeSave }: any, i: number) => (
              <React.Fragment key={i}>
                <ListItem
                  sx={{ flexDirection: "column", alignItems: "flex-start" }}
                >
                  <Typography
                    sx={{ color: "blue" }}
                  >{`Время сохранения: ${timeSave}`}</Typography>
                  {[
                    { str: "Фамилия", data: dataStud.surname },
                    { str: "Имя", data: dataStud.name },
                    { str: "Класс", data: dataStud.class },
                  ].map(({ str, data }, i) => (
                    <Typography
                      sx={{ color: "#e07600", fontSize: "20px" }}
                      key={`${i}-quizList`}
                    >{`${str}: ${data}`}</Typography>
                  ))}
                  <>
                    {AllList[0]?.quiz.educationTest.map(
                      ({ qvest }, i: number) => (
                        <Typography
                          sx={{
                            color:
                              qvest ===
                              errList?.find((e: string) => e === qvest)
                                ? "red"
                                : "green",
                          }}
                          key={i}
                        >{`${i + 1}. ${qvest}`}</Typography>
                      )
                    )}
                  </>
                </ListItem>
                <Divider />
              </React.Fragment>
            )
          )}
        </List>
      </Dialog>
    </div>
  );
}
