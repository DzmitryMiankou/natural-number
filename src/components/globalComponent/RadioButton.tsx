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

const Radios = ({ data }: { data: PropTypeTest | undefined }) => {
  const state = useSelector((store: RootState) => store.radio.arr);
  const answer = useSelector((store: RootState) => store.radio);
  const dispatch: AppDispatch = useDispatch();
  const [helperText, setHelperText] = React.useState<string>(" ");
  const [errorText, setErrorText] = React.useState<Array<string>>([]);

  const simbolSplit = "|";
  const errText: Array<string> = [
    "Выберите правильный вариант ответа",
    "Молодец. Ответы все правильные",
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
      const line = answer.obj.find((i) => i.key === indexData.qvest);
      line?.value === indexData.answer.split(simbolSplit)[indexData?.right || 0]
        ? errorQvest.push()
        : errorQvest.push(indexData.qvest);
    }
    setErrorText(errorQvest);
    if (errorQvest.length === 0) return setHelperText(errText[1]);
    setHelperText(errText[0]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {data?.map(({ qvest, answer }, i) => (
          <React.Fragment key={i}>
            <FormControl
              sx={{ m: 3 }}
              error={errorText.find((item) => item === qvest) ? true : false}
              variant="standard"
            >
              <FormLabel focused={false}>{qvest}</FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={new Set(state).forEach((entry) => entry)}
                onChange={(e) => handleRadioChange(e, qvest)}
              >
                <>
                  {answer.split(simbolSplit).map((data, i) => (
                    <FormControlLabel
                      key={i}
                      value={data}
                      control={<Radio />}
                      label={data}
                    />
                  ))}
                </>
              </RadioGroup>
            </FormControl>
          </React.Fragment>
        ))}
        <FormHelperText
          sx={{
            color: errorText.length === 0 ? "green" : "red",
            fontSize: "14px",
          }}
        >
          {helperText}
        </FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Проверить ответы
        </Button>
      </form>
    </>
  );
};

export default React.memo(Radios);
