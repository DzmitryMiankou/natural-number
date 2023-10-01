import { reducerObjActualData } from "../../services/reducersService";
import { TypeActionObj } from "../../services/reducersService";
const DIVISION = "DIVISION";
const CLEAR = "CLEAR_DIVISION_ALL";

type genType<T> = { a: T; b: T; result: T };

const rundomNumber = (startNumber: number): number => {
  return Math.floor(2 + Math.random() * (startNumber + 1 - 2));
};

const generateMathExpression = (): Array<genType<number>> => {
  let arr: Array<genType<number>> = [];
  for (let i = 0; i < 200; i++) {
    const a = rundomNumber(99);
    const b = rundomNumber(50);
    if (arr.length === 3) break;
    if (
      a % b === 0 &&
      a !== b &&
      a / b !== arr.find((e) => e.result === a / b)?.result
    ) {
      arr.push({ a: a, b: b, result: a / b });
    }
  }
  return arr;
};

export interface TypeActionDivision {
  type: typeof DIVISION | typeof CLEAR;
  value: { key: number; value: string };
}

const initialState: {
  obj: TypeActionObj[];
  startData: Array<{ a: number; b: number; result: number }>;
} = {
  startData: [...generateMathExpression()],
  obj: [],
};

const divisionReducer = (state = initialState, action: TypeActionDivision) => {
  switch (action.type) {
    case DIVISION: {
      let obj = [...state.obj, { ...action.value }];
      const newFilterArr = reducerObjActualData(obj, action);
      return {
        ...state,
        obj: [...newFilterArr],
      };
    }
    case CLEAR: {
      return { ...initialState, startData: generateMathExpression() };
    }
    default:
      return state;
  }
};

export const divisionAction = (value: TypeActionObj) => ({
  type: DIVISION,
  value: value,
});

export const clearDivisionAction = () => ({
  type: CLEAR,
});

export default divisionReducer;
