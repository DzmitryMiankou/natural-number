import { reducerObjActualData } from "../../services/reducersService";
import { TypeActionObj } from "../../services/reducersService";
const INPUT = "INPUT_INPUT";
const UPDATE = "INPUT_UPDATE";

type genType<T> = { a: T; b: number; c: T };

const rundomNumber = (startNumber: number, b: number): number =>
  Math.floor(b + Math.random() * (startNumber + 1 - b));

const generateMathExpression = (): Array<genType<number>> => {
  const a = rundomNumber(90, 20);
  let arr: Array<genType<number>> = [];

  for (let i = 0; arr.length !== 8; i++) {
    const b = rundomNumber(88, 1);
    if (a > b && a - b !== arr.find((e) => e.c === a - b)?.c)
      arr.push({
        a: a,
        b: b,
        c: a - b,
      });
  }
  return arr;
};

type TypeActionValue = { key: number; value: string };

export interface TypeActionStar {
  type: typeof INPUT | typeof UPDATE;
  value: TypeActionValue;
}

const initialState: {
  obj: TypeActionObj[];
  startData: Array<genType<number>>;
} = {
  startData: [...generateMathExpression()],
  obj: [],
};

const plusPageInputReducer = (state = initialState, action: TypeActionStar) => {
  switch (action.type) {
    case INPUT: {
      let obj = [...state.obj, { ...action.value }];
      const newFilterArr = reducerObjActualData(obj, action);
      return {
        ...state,
        obj: [...newFilterArr],
      };
    }
    case UPDATE: {
      return {
        ...initialState,
        startData: generateMathExpression(),
      };
    }
    default:
      return state;
  }
};

export const inputPlusPageAction = (value: TypeActionValue) => ({
  type: INPUT,
  value: value,
});
export const updatePlusPageAction = () => ({
  type: UPDATE,
});
export default plusPageInputReducer;
