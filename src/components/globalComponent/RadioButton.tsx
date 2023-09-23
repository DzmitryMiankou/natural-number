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
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Выбирай с умом");
  const [v, setv] = React.useState<Array<string>>([""]);

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    qvest: string,
    b: any
  ) => {
    setHelperText(" ");
    setError(false);
    setv(b);
    dispatch(
      radioAction({
        key: qvest,
        value: (event.target as HTMLInputElement).value,
      })
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    for (let i in data) {
      let index: number = +i;
      const f = answer.obj.find((i) => i.key === data[index].qvest);
      const n = data[index]?.right;
      f?.value === data[index].answer.split("|")[n || 0]
        ? console.log(data[index].answer.split("|")[0])
        : console.log(`no + ${index} `);
    }

    if (`${v[2]}` === `2`) {
      setHelperText("Отлично");
      setError(false);
    } else if (state.length > 0 || `${v[2]}` !== ` 0.`) {
      setHelperText("Плохой ответ");
      setError(true);
    } else {
      state.forEach((e) => console.log(`${e}`));
      setHelperText("Вы ничего не выбрали");
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {data?.map(({ qvest, answer }, i) => (
          <React.Fragment key={i}>
            <FormControl sx={{ m: 3 }} error={error} variant="standard">
              <FormLabel focused={false}>{qvest}</FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={new Set(state).forEach((entry) => entry)}
                onChange={(e) => handleRadioChange(e, qvest, answer.split("|"))}
              >
                <>
                  {answer.split("|").map((data, i) => (
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
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </form>
    </>
  );
};

export default React.memo(Radios);
