import React, { useCallback, ChangeEvent } from "react";
import styled, { keyframes } from "styled-components";
import {
  inputPlusPageAction,
  updatePlusPageAction,
} from "../../../redux/plusReducer/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import TooltipButt from "../../globalComponent/Tooltip";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useResize } from "../../../hook/resizeWindHook";
import { SxProps } from "@mui/material";

const sx: { icon: SxProps } = {
  icon: {
    fontSize: "70px",
    cursor: "pointer",
    color: "var(--color-red-title-icon)",
    backgroundColor: "#fff1e8",
    borderRadius: "50px",
  },
};

const opacityAnimationErr = keyframes`
  0% { background-color: #eec9c1;}
  100% { background-color: var(--color-red-notRight);}
`;

const opacityAnimationOk = keyframes`
  0% { background-color: #fff1e8;}
  100% { background-color: #7ab700;}
`;

const move = keyframes`
  0% { stroke-dashoffset: 0;}
  100% { stroke-dashoffset: 60;}
`;

interface TypeInputStyle {
  $val: string;
  $c: number;
  $anim: any;
  $res: number;
}

const Input = styled.input<TypeInputStyle>`
  font-size: 80px;
  width: 85px;
  background-color: ${(prop) =>
    +prop.$c + +prop.$val === prop.$res && prop.$val !== ""
      ? "#ffda9d"
      : "#eec9c1"};
  border: none;
  outline: none;
  text-align: center;
  border-radius: 50px;
  padding: 10px;
  animation: ${(prop) => prop.$anim} 0.8s linear infinite;
  transition: var(--transition-prop-0_2s);
  &:hover {
    background: #b5dce5;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 5px;
`;

const Circle0 = styled.circle`
  fill: var(--color-orange-circle);
  stroke: var(--color-black);
  stroke-miterlimit: 10;
`;

const Circle1 = styled(Circle0)`
  fill: none;
  stroke: var(--color-orange-circle);
  stroke-width: 5;
`;

const Circle2 = styled(Circle0)`
  fill: none;
  stroke: #008cad;
  stroke-width: 5;
  stroke-dasharray: 10;
  animation: ${move} 7s linear infinite;
`;

const Text1 = styled.text`
  font-size: 163.8971px;
`;

interface TypeInpArr<T> {
  x: T;
  y: T;
  id: number;
  matrixX: number;
  matrixY: number;
}

const inpArr: Array<TypeInpArr<string>> = [
  {
    x: "486",
    y: "18",
    id: 5,
    matrixX: 515,
    matrixY: 325,
  },
  {
    x: "824",
    y: "158",
    id: 3,
    matrixX: 695,
    matrixY: 394,
  },
  {
    x: "958",
    y: "490",
    id: 2,
    matrixX: 770,
    matrixY: 567,
  },
  {
    x: "818",
    y: "820",
    id: 7,
    matrixX: 700,
    matrixY: 745,
  },
  {
    x: "492",
    y: "955",
    id: 6,
    matrixX: 524,
    matrixY: 820,
  },
  {
    x: "156",
    y: "815",
    id: 8,
    matrixX: 345,
    matrixY: 755,
  },
  {
    x: "23",
    y: "482",
    id: 4,
    matrixX: 270,
    matrixY: 576.0526,
  },
  {
    x: "162",
    y: "152",
    id: 1,
    matrixX: 340,
    matrixY: 400,
  },
];

interface TypeButtArr {
  textToolTip: string;
  icon: JSX.Element;
}

const buttArrF = (
  restartNumber: () => void,
  checkNumber: () => void
): Array<TypeButtArr> => [
  {
    textToolTip: "Сбросить",
    icon: <RestartAltIcon onClick={restartNumber} sx={sx.icon} />,
  },
  {
    textToolTip: "Проверить",
    icon: <CheckCircleOutlineIcon onClick={checkNumber} sx={sx.icon} />,
  },
];

const StarSVG: React.FC = () => {
  const windowHeight = useResize();
  const state = useSelector((store: RootState) => store.plusPageInputReducer);
  const dispatch: AppDispatch = useDispatch();
  const [get, set] = React.useState<boolean>(false);

  const onChangeCommit = useCallback(
    (e: ChangeEvent<HTMLInputElement>, id: number) => {
      e.preventDefault();
      const text = e.target.value;
      dispatch(inputPlusPageAction({ key: id, value: text }));
    },
    [dispatch]
  );

  const restartNumber = () => {
    set(false);
    dispatch(updatePlusPageAction());
  };

  const checkNumber = () => set(!get);

  const assignObj = () => {
    let newArr = [];
    for (let i in inpArr) {
      const newObj = Object.assign(inpArr[i], state.startData[i], state.obj[i]);
      newArr.push(newObj);
    }
    return newArr;
  };

  const actualInputData = (id: number): string =>
    state.obj.find((n) => +n.key === id)?.value ?? "";

  const animQvest = (id: number, c: number) => {
    if (get === true && id !== c) return opacityAnimationErr;
    if (get === true && id === c) return opacityAnimationOk;
  };

  return (
    <svg
      x="0px"
      y="0px"
      viewBox={
        windowHeight.width < 1600 ? "-290 0 1700 1160" : "-100 0 1280 1160"
      }
    >
      <>
        {assignObj().map(({ x, y, id, c, a, b, matrixX, matrixY }) => {
          return (
            <React.Fragment key={id}>
              <text
                fontSize="85px"
                transform={`matrix(0.9998 -1.844159e-02 1.844159e-02 0.9998 ${
                  `${b}`.length === 2 ? matrixX - 25 : matrixX
                } ${matrixY})`}
              >
                {b}
              </text>
              <foreignObject x={x} y={y} width="120" height="120">
                <form>
                  <label htmlFor={`text-id-${b}`}></label>
                  <Input
                    aria-label={`text-id-${b}`}
                    value={actualInputData(id)}
                    type="number"
                    id={`text-id-${b}`}
                    maxLength={2}
                    placeholder="?"
                    onChange={(e) => onChangeCommit(e, id)}
                    $res={a}
                    $val={actualInputData(id)}
                    $c={b}
                    $anim={animQvest(+actualInputData(id), c)}
                  />
                </form>
              </foreignObject>
            </React.Fragment>
          );
        })}
      </>
      <foreignObject x="950" y="0" width="200" height="120">
        <ButtonBox>
          {buttArrF(restartNumber, checkNumber).map(({ textToolTip, icon }) => (
            <TooltipButt key={textToolTip} text={textToolTip} element={icon} />
          ))}
        </ButtonBox>
      </foreignObject>
      <Circle0 cx="540" cy="540" r="104.9" />
      <Text1
        transform={`matrix(1 0 0 1 ${
          `${state.startData[0].a}`.length === 2 ? 454 : 498
        } 600)`}
      >
        {state.startData[0].a}
      </Text1>
      <path d="M532.6,716.6l-6.7,0l0-57.4l6.7,0L532.6,716.6z M554.4,716.6l-6.7,0l0-57.4l6.7,0L554.4,716.6z" />
      <path d="M409.9,659.6l-4.7-4.7l40.5-40.6l4.7,4.7L409.9,659.6z M425.3,675l-4.7-4.7l40.5-40.6l4.7,4.7L425.3,675z" />
      <path d="M363.4,532.6l0-6.7l57.4,0l0,6.7L363.4,532.6z M363.4,554.4l0-6.7l57.4,0l0,6.7L363.4,554.4z" />
      <path d="M420.4,409.9l4.7-4.7l40.6,40.5l-4.7,4.7L420.4,409.9z M405,425.3l4.7-4.7l40.6,40.5l-4.7,4.7L405,425.3z" />
      <path d="M547.4,363.4l6.7,0l0,57.4l-6.7,0L547.4,363.4z M525.6,363.4l6.7,0l0,57.4l-6.7,0L525.6,363.4z" />
      <path d="M670.1,420.4l4.7,4.7l-40.5,40.6l-4.7-4.7L670.1,420.4z M654.7,405l4.7,4.7l-40.5,40.6l-4.7-4.7L654.7,405z" />
      <path d="M716.6,547.4l0,6.7l-57.4,0l0-6.7L716.6,547.4z M716.6,525.6l0,6.7l-57.4,0l0-6.7L716.6,525.6z" />
      <path d="M659.6,670.1l-4.7,4.7l-40.6-40.5l4.7-4.7L659.6,670.1z M675,654.7l-4.7,4.7l-40.6-40.5l4.7-4.7L675,654.7z" />
      <Circle1 cx="544.6" cy="790.3" r="59.7" />
      <Circle1 cx="364.3" cy="723.3" r="59.7" />
      <Circle1 cx="289.7" cy="544.6" r="59.7" />
      <Circle1 cx="359.7" cy="366.3" r="59.7" />
      <Circle1 cx="535.4" cy="289.7" r="59.7" />
      <Circle1 cx="713.7" cy="359.7" r="59.7" />
      <Circle1 cx="790.3" cy="535.4" r="59.7" />
      <Circle1 cx="720.3" cy="713.7" r="59.7" />
      <path d="M538.9,922l-0.2-25.7l-24.7,0.2l0-6.6l24.7-0.2l-0.2-25.9l7,0l0.2,25.9l24.7-0.2l0,6.6l-24.7,0.2l0.2,25.7L538.9,922z" />
      <path
        d="M269.1,809.3l18.1-18.3l-17.6-17.4l4.6-4.7l17.6,17.4l18.2-18.4l5,4.9l-18.2,18.4l17.6,17.4l-4.6,4.7L292.1,796
					L274,814.2L269.1,809.3z"
      />
      <path d="M158,538.9l25.7-0.2l-0.2-24.7l6.6,0l0.2,24.7l25.9-0.2l0,7l-25.9,0.2l0.2,24.7l-6.6,0l-0.2-24.7l-25.7,0.2L158,538.9z" />
      <path
        d="M270.7,269.1l18.3,18.1l17.4-17.6l4.7,4.6l-17.4,17.6l18.4,18.2l-4.9,5l-18.4-18.2l-17.4,17.6l-4.7-4.6l17.4-17.6
					L265.8,274L270.7,269.1z"
      />
      <path d="M541.1,158l0.2,25.7l24.7-0.2l0,6.6l-24.7,0.2l0.2,25.9l-7,0l-0.2-25.9l-24.7,0.2l0-6.6l24.7-0.2l-0.2-25.7L541.1,158z" />
      <path
        d="M810.9,270.7L792.9,289l17.6,17.4l-4.6,4.7l-17.6-17.4l-18.2,18.4l-5-4.9l18.2-18.4l-17.6-17.4l4.6-4.7l17.6,17.4
					l18.1-18.3L810.9,270.7z"
      />
      <path d="M922,541.1l-25.7,0.2l0.2,24.7l-6.6,0l-0.2-24.7l-25.9,0.2l0-7l25.9-0.2l-0.2-24.7l6.6,0l0.2,24.7l25.7-0.2L922,541.1z" />
      <path
        d="M809.3,810.9L791,792.9l-17.4,17.6l-4.7-4.6l17.4-17.6l-18.4-18.2l4.9-5l18.4,18.2l17.4-17.6l4.7,4.6L796,787.9
					l18.3,18.1L809.3,810.9z"
      />
      <Circle2 cx="541" cy="1007.3" r="67.4" />
      <Circle2 cx="207.3" cy="868.2" r="67.4" />
      <Circle2 cx="72.7" cy="536.8" r="67.4" />
      <Circle2 cx="211.8" cy="207.3" r="67.4" />
      <Circle2 cx="536" cy="72.7" r="67.4" />
      <Circle2 cx="872.7" cy="211.8" r="67.4" />
      <Circle2 cx="1007.3" cy="543.2" r="67.4" />
      <Circle2 cx="868.2" cy="872.7" r="67.4" />
    </svg>
  );
};

export default StarSVG;
