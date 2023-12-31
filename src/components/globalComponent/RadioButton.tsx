import React, { useState, ChangeEvent, FormEvent } from "react";
import { PropTypeTest } from "./TitlePage";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { radioAction } from "../../redux/radioReducer/RadioReducer";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { SxProps } from "@mui/material";
import {
  FormLabel,
  FormHelperText,
  FormControlLabel,
  RadioGroup,
  FormControl,
  Radio,
  Button,
  Box,
} from "@mui/material";
import AlertDialog from "./modalQuiz/ModalQuiz";
import { radioActionErrList } from "../../redux/radioReducer/RadioReducer";

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const sx: (prop?: boolean) => {
  button: SxProps;
  radio: SxProps;
  formLabel: SxProps;
} = (prop?: boolean) => ({
  button: {
    color: "var(--color-radio)",
    border: "solid 1px var(--color-radio)",
    "&:hover": {
      color: "var(--color-white)",
      border: "solid 1px var(--color-radio)",
      backgroundColor: "var(--color-radio)",
    },
  },
  radio: {
    "&, &.Mui-checked": {
      color: "var(--color-radio)",
    },
  },
  formLabel: { color: prop ? "var(--color-red-accent)" : "" },
});

const Radios: React.FC<{
  data?: PropTypeTest;
  testType: string;
}> = ({ data, testType }) => {
  const state = useSelector((store: RootState) => store.radio);

  const dispatch: AppDispatch = useDispatch();
  const [helperText, setHelperText] = useState<string>(" ");
  const [errorText, setErrorText] = useState<Array<string>>([]);
  const [focuse, setFocuse] = useState<string>("");
  const [open, setOpen] = React.useState<boolean>(false);

  const enum TypeErrText {
    allErr = "Вы ответили не на все вопросы",
    partErr = "Ответили неправильно",
    allGood = "Молодец. Все ответы правильные",
  }

  const handleClose = () => setOpen(false);

  const handleOpen = () => {
    if (state.obj.length !== data?.length) {
      setOpen(false);
      return setHelperText(TypeErrText.allErr);
    }
    setOpen(true);
  };

  const simbolSplit = "|";

  const handleRadioChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    qvest: string,
    typeInput: number
  ) => {
    event.preventDefault();
    setHelperText(" ");
    setErrorText([" "]);
    const value: string = (event.target as HTMLInputElement).value;
    dispatch(
      radioAction({
        key: qvest,
        value: typeInput === 1 ? value.replaceAll(" ", "") : value,
      })
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let errorQvest: Array<string> = [];

    for (let i in data) {
      let index: number = +i;
      const indexData = data[index];
      const line = state.obj.find((i) => i.key === indexData.qvest);
      line?.value === indexData.answer.split(simbolSplit)[indexData?.right || 0]
        ? errorQvest.push()
        : errorQvest.push(indexData.qvest);
    }
    setErrorText(errorQvest);
    dispatch(radioActionErrList(errorQvest));
    if (state.obj.length !== data?.length)
      return setHelperText(TypeErrText.allErr);

    if (errorQvest.length === 0) return setHelperText(TypeErrText.allGood);

    setHelperText(TypeErrText.partErr);
  };

  return (
    <form onSubmit={handleSubmit}>
      {data?.map(({ qvest, answer }, i) => (
        <React.Fragment key={i}>
          <FormControl
            sx={{ m: 3 }}
            error={errorText.find((item) => item === qvest) ? true : false}
            variant="standard"
          >
            <div
              onMouseEnter={() => setFocuse(qvest)}
              onMouseLeave={() => setFocuse("")}
            >
              <FormLabel focused={false} sx={sx(focuse === qvest).formLabel}>
                {`${i + 1}.${qvest}`}
              </FormLabel>
              <>
                {answer.split(simbolSplit).length === 1 ? (
                  <Box>
                    <TextField
                      label="ваш ответ"
                      variant="filled"
                      onChange={(e) =>
                        handleRadioChange(
                          e,
                          qvest,
                          answer.split(simbolSplit).length
                        )
                      }
                    />
                  </Box>
                ) : (
                  <RadioGroup
                    aria-labelledby="demo-error-radios"
                    name="quiz"
                    value={new Set(answer).forEach((entry) => entry)}
                    onChange={(e) =>
                      handleRadioChange(
                        e,
                        qvest,
                        answer.split(simbolSplit).length
                      )
                    }
                  >
                    <>
                      {answer.split(simbolSplit).map((data, i) => (
                        <FormControlLabel
                          key={i}
                          value={data}
                          control={<Radio sx={sx().radio} />}
                          label={data}
                        />
                      ))}
                    </>
                  </RadioGroup>
                )}
              </>
            </div>
          </FormControl>
        </React.Fragment>
      ))}
      <ButtonBox>
        <FormHelperText
          sx={{
            color: errorText.length === 0 ? "green" : "red",
            fontSize: "14px",
          }}
        >
          {helperText}
        </FormHelperText>
        <Button
          onClick={testType === "Обобщающий тест" ? handleOpen : undefined}
          sx={sx().button}
          type="submit"
          variant="outlined"
        >
          Проверить ответы
        </Button>
      </ButtonBox>
      <AlertDialog handleClose={handleClose} open={open} state={state} />
    </form>
  );
};

export default React.memo(Radios);
