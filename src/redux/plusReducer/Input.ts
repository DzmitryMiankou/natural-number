import { reducerObjActualData } from "../../services/reducersService";
import { TypeActionObj } from "../../services/reducersService";
const INPUT = "INPUT_INPUT";
const UPDATE = "INPUT_UPDATE";

type genType<T> = { a: T; b: number; c: T };

const rundomNumber = (startNumber: number): number => {
  return Math.floor(8 + Math.random() * (startNumber + 1 - 8));
};

const generateMathExpression = (): Array<genType<number>> => {
  const a = rundomNumber(50);
  let arr: Array<genType<number>> = [];

  function www() {
    for (let i = 0; i < 500; i++) {
      const b = rundomNumber(30);
      if (a > b && a - b !== arr.find((e) => e.c === a - b)?.c) {
        arr.push({
          a: a,
          b: b,
          c: a - b,
        });
      }
      if (+arr.length === 8) break;
    }
  }

  if (+arr.length < 8) {
    www();
    return arr;
  }
  www();
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
