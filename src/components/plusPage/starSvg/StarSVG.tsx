import React from "react";
import styled from "styled-components";
import {
  inputPlusPageAction,
  updatePlusPageAction,
} from "../../../redux/plusReducer/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import TooltipButt from "../../globalComponent/Tooltip";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface TypeInputStyle {
  $id: number;
  $val: string;
}

const Input = styled.input<TypeInputStyle>`
  font-size: 80px;
  width: 80px;
  background-color: ${(prop) =>
    +prop.$id + +prop.$val === 8 ? "#ffda9d" : "#af5946"};
  border: none;
  outline: none;
  text-align: center;
  border-radius: 50px;
  padding: 10px;
  &:hover {
    background: #b5dce5;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 5px;
`;

const Circle0 = styled.circle`
  fill: #e38b00;
  stroke: #000000;
  stroke-miterlimit: 10;
`;

const Circle1 = styled.circle`
  fill: none;
  stroke: #e38b00;
  stroke-width: 5;
  stroke-miterlimit: 10;
`;

const Circle2 = styled.circle`
  fill: none;
  stroke: #008cad;
  stroke-width: 5;
  stroke-miterlimit: 10;
`;

const Text1 = styled.text`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif !important;
  font-size: 163.8971px;
`;

const Text2 = styled.text`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif !important;
  font-size: 105.4318px;
`;

interface TypeInpArr<T> {
  x: T;
  y: T;
  b: number;
}

const inpArr: Array<TypeInpArr<string>> = [
  { x: "486", y: "18", b: 5 },
  { x: "824", y: "158", b: 3 },
  { x: "958", y: "490", b: 2 },
  { x: "818", y: "820", b: 7 },
  { x: "492", y: "955", b: 6 },
  { x: "156", y: "815", b: 8 },
  { x: "23", y: "482", b: 4 },
  { x: "162", y: "152", b: 1 },
];

const StarSVG = () => {
  const state = useSelector((store: RootState) => store.plusPageInputReducer);
  const dispatch = useDispatch();

  const onChangeCommit = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
      e.preventDefault();
      const text = e.target.value;
      dispatch(inputPlusPageAction({ text: text, id: id }));
    },
    [dispatch]
  );

  const restartNumber = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      dispatch(updatePlusPageAction());
    },
    [dispatch]
  );

  return (
    <svg version="1.1" x="0px" y="0px" viewBox="-100 0 1280 1280">
      <>
        {inpArr.map(({ x, y, b }) => (
          <foreignObject key={b} x={x} y={y} width="120" height="120">
            <form>
              <Input
                value={
                  state.arr[state.arr.map((el) => el.id).lastIndexOf(b)]
                    ?.text || ""
                }
                type="text"
                maxLength={1}
                onChange={(e) => onChangeCommit(e, b)}
                $id={b}
                $val={
                  state.arr[state.arr.map((el) => el.id).lastIndexOf(b)]
                    ?.text || "?"
                }
              />
            </form>
          </foreignObject>
        ))}
      </>
      <foreignObject x="950" y="0" width="200" height="120">
        <ButtonBox>
          <TooltipButt
            text={"Сбросить"}
            element={
              <RestartAltIcon
                onClick={restartNumber}
                sx={{
                  fontSize: "70px",
                  cursor: "pointer",
                  color: "#af5946",
                  backgroundColor: "#fff1e8",
                  borderRadius: "50px",
                }}
              />
            }
          />
          <TooltipButt
            text={"Проверить"}
            element={
              <CheckCircleOutlineIcon
                onClick={restartNumber}
                sx={{
                  fontSize: "70px",
                  cursor: "pointer",
                  color: "#af5946",
                  backgroundColor: "#fff1e8",
                  borderRadius: "50px",
                }}
              />
            }
          />
        </ButtonBox>
      </foreignObject>
      <g>
        <Circle0 cx="540" cy="540" r="104.9" />
        <Text1 transform="matrix(1 0 0 1 496 600)">8</Text1>
        <g>
          <g>
            <g>
              <path d="M532.6,716.6l-6.7,0l0-57.4l6.7,0L532.6,716.6z M554.4,716.6l-6.7,0l0-57.4l6.7,0L554.4,716.6z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M409.9,659.6l-4.7-4.7l40.5-40.6l4.7,4.7L409.9,659.6z M425.3,675l-4.7-4.7l40.5-40.6l4.7,4.7L425.3,675z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M363.4,532.6l0-6.7l57.4,0l0,6.7L363.4,532.6z M363.4,554.4l0-6.7l57.4,0l0,6.7L363.4,554.4z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M420.4,409.9l4.7-4.7l40.6,40.5l-4.7,4.7L420.4,409.9z M405,425.3l4.7-4.7l40.6,40.5l-4.7,4.7L405,425.3z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M547.4,363.4l6.7,0l0,57.4l-6.7,0L547.4,363.4z M525.6,363.4l6.7,0l0,57.4l-6.7,0L525.6,363.4z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M670.1,420.4l4.7,4.7l-40.5,40.6l-4.7-4.7L670.1,420.4z M654.7,405l4.7,4.7l-40.5,40.6l-4.7-4.7L654.7,405z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M716.6,547.4l0,6.7l-57.4,0l0-6.7L716.6,547.4z M716.6,525.6l0,6.7l-57.4,0l0-6.7L716.6,525.6z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M659.6,670.1l-4.7,4.7l-40.6-40.5l4.7-4.7L659.6,670.1z M675,654.7l-4.7,4.7l-40.6-40.5l4.7-4.7L675,654.7z" />
            </g>
          </g>
        </g>
        <Circle1 cx="544.6" cy="790.3" r="59.7" />
        <Text2 transform="matrix(0.9998 -1.844189e-02 1.844189e-02 0.9998 518.1503 824.7524)">
          6
        </Text2>
        <g>
          <Circle1 cx="364.3" cy="723.3" r="59.7" />
          <Text2 transform="matrix(1 0 0 1 337.223 754.2089)">8</Text2>
        </g>
        <Circle1 cx="289.7" cy="544.6" r="59.7" />
        <Text2 transform="matrix(0.9998 -1.843502e-02 1.843502e-02 0.9998 259.2195 576.0526)">
          4
        </Text2>
        <g>
          <g>
            <Circle1 cx="359.7" cy="366.3" r="59.7" />
            <Text2 transform="matrix(0.6939 -0.72 0.72 0.6939 363.2527 407.2113)">
              1
            </Text2>
          </g>
        </g>
        <Circle1 cx="535.4" cy="289.7" r="59.7" />
        <Text2 transform="matrix(0.9998 -1.844159e-02 1.844159e-02 0.9998 508.9168 321.1252)">
          5
        </Text2>
        <Circle1 cx="713.7" cy="359.7" r="59.7" />
        <Text2 transform="matrix(0.72 0.6939 -0.6939 0.72 674.7882 365.2527)">
          3
        </Text2>
        <Circle1 cx="790.3" cy="535.4" r="59.7" />
        <Text2 transform="matrix(0.9998 -1.843505e-02 1.843505e-02 0.9998 763.8461 566.8228)">
          2
        </Text2>
        <Circle1 cx="720.3" cy="713.7" r="59.7" />
        <Text2 transform="matrix(0.9998 -1.843443e-02 1.843443e-02 0.9998 695.7951 750.1721)">
          7
        </Text2>
      </g>
      <g id="Слой_2">
        <g>
          <g>
            <g>
              <path d="M538.9,922l-0.2-25.7l-24.7,0.2l0-6.6l24.7-0.2l-0.2-25.9l7,0l0.2,25.9l24.7-0.2l0,6.6l-24.7,0.2l0.2,25.7L538.9,922z" />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M269.1,809.3l18.1-18.3l-17.6-17.4l4.6-4.7l17.6,17.4l18.2-18.4l5,4.9l-18.2,18.4l17.6,17.4l-4.6,4.7L292.1,796
					L274,814.2L269.1,809.3z"
              />
            </g>
          </g>
          <g>
            <g>
              <path d="M158,538.9l25.7-0.2l-0.2-24.7l6.6,0l0.2,24.7l25.9-0.2l0,7l-25.9,0.2l0.2,24.7l-6.6,0l-0.2-24.7l-25.7,0.2L158,538.9z" />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M270.7,269.1l18.3,18.1l17.4-17.6l4.7,4.6l-17.4,17.6l18.4,18.2l-4.9,5l-18.4-18.2l-17.4,17.6l-4.7-4.6l17.4-17.6
					L265.8,274L270.7,269.1z"
              />
            </g>
          </g>
          <g>
            <g>
              <path d="M541.1,158l0.2,25.7l24.7-0.2l0,6.6l-24.7,0.2l0.2,25.9l-7,0l-0.2-25.9l-24.7,0.2l0-6.6l24.7-0.2l-0.2-25.7L541.1,158z" />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M810.9,270.7L792.9,289l17.6,17.4l-4.6,4.7l-17.6-17.4l-18.2,18.4l-5-4.9l18.2-18.4l-17.6-17.4l4.6-4.7l17.6,17.4
					l18.1-18.3L810.9,270.7z"
              />
            </g>
          </g>
          <g>
            <g>
              <path d="M922,541.1l-25.7,0.2l0.2,24.7l-6.6,0l-0.2-24.7l-25.9,0.2l0-7l25.9-0.2l-0.2-24.7l6.6,0l0.2,24.7l25.7-0.2L922,541.1z" />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M809.3,810.9L791,792.9l-17.4,17.6l-4.7-4.6l17.4-17.6l-18.4-18.2l4.9-5l18.4,18.2l17.4-17.6l4.7,4.6L796,787.9
					l18.3,18.1L809.3,810.9z"
              />
            </g>
          </g>
        </g>
        <g>
          <g>
            <Circle2 cx="541" cy="1007.3" r="67.4" />
          </g>
          <g>
            <Circle2 cx="207.3" cy="868.2" r="67.4" />
          </g>
          <g>
            <Circle2 cx="72.7" cy="536.8" r="67.4" />
          </g>
          <g>
            <Circle2 cx="211.8" cy="207.3" r="67.4" />
          </g>
          <g>
            <Circle2 cx="536" cy="72.7" r="67.4" />
          </g>
          <g>
            <Circle2 cx="872.7" cy="211.8" r="67.4" />
          </g>
          <g>
            <Circle2 cx="1007.3" cy="543.2" r="67.4" />
          </g>
          <g>
            <Circle2 cx="868.2" cy="872.7" r="67.4" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default StarSVG;
