import * as React from "react";
import { PropTypeTest } from "./TitlePage";
import {
  FormLabel,
  FormHelperText,
  FormControlLabel,
  RadioGroup,
  FormControl,
  Radio,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { radioAction } from "../../redux/radioReducer/RadioReducer";
import styled from "styled-components";

const ButtonBox = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const sx = (prop?: boolean) => ({
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

const Radios = ({ data }: { data: PropTypeTest | undefined }) => {
  const state = useSelector((store: RootState) => store.radio);
  const dispatch: AppDispatch = useDispatch();
  const [helperText, setHelperText] = React.useState<string>(" ");
  const [errorText, setErrorText] = React.useState<Array<string>>([]);
  const [focuse, setFocuse] = React.useState<string>("");

  const simbolSplit = "|";
  const errText: Array<string> = [
    "Ответили не правильно",
    "Молодец. Ответы все правильные",
    "Вы ответили не на все вопросы",
  ];

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    qvest: string
  ) => {
    setHelperText(" ");
    setErrorText([" "]);
    dispatch(
      radioAction({
        key: qvest,
        value: (event.target as HTMLInputElement).value,
      })
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
    if (state.obj.length !== data?.length) return setHelperText(errText[2]);
    if (errorQvest.length === 0) return setHelperText(errText[1]);
    setHelperText(errText[0]);
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
                {qvest}
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={new Set(answer).forEach((entry) => entry)}
                onChange={(e) => handleRadioChange(e, qvest)}
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
        <Button sx={sx().button} type="submit" variant="outlined">
          Проверить ответы
        </Button>
      </ButtonBox>
    </form>
  );
};

export default React.memo(Radios);
