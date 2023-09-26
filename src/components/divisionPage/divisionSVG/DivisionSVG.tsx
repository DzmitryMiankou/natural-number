import React, { useCallback, ChangeEvent } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import { divisionAction } from "../../../redux/divisionReducer/DivisionReducer";

const SVG = styled.svg`
  position: absolute;
  left: 0;
`;

const Input = styled.input`
  height: 100%;
  background-color: #b56c6c;
  border: none;
  outline: none;
  text-align: center;
  padding: 5px;
  font-size: 70px;
  width: 100%;
  transition: 0.2s;
  &:hover {
    background: #e3b9b9;
  }
`;

const positionY = "291";

interface TypeInpArr<T> {
  x: string;
  y: T;
  id: number;
}

const inpArr: Array<TypeInpArr<typeof positionY>> = [
  { x: "617", y: positionY, id: 8 },
  { x: "1016", y: positionY, id: 43 },
  { x: "1433", y: positionY, id: 25 },
];

const DivisionSVG = () => {
  const state = useSelector((store: RootState) => store.division);
  const dispatch: AppDispatch = useDispatch();

  const onChangeCommit = useCallback(
    (e: ChangeEvent<HTMLInputElement>, id: number) => {
      e.preventDefault();
      const text = (e.target as HTMLInputElement).value;
      dispatch(
        divisionAction({
          key: id,
          value: text,
        })
      );
    },
    [dispatch]
  );

  const actualInputData = (id: number): string =>
    state.obj.find((city) => city.key === id)?.value ?? "";

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 1920 529.3"
    >
      {inpArr.map(({ x, y, id }) => (
        <foreignObject key={x} x={x} y={y} width="147" height="147">
          <Input
            maxLength={2}
            onChange={(e) => onChangeCommit(e, id)}
            value={actualInputData(id)}
          />
        </foreignObject>
      ))}
    </SVG>
  );
};

export default DivisionSVG;
