import { reducerObjActualData } from "../../services/reducersService";
import { TypeActionObj } from "../../services/reducersService";
const INPUT = "INPUT_INPUT";
const UPDATE = "INPUT_UPDATE";

type TypeActionValue = { key: number; value: string };

export interface TypeActionStar {
  type: typeof INPUT | typeof UPDATE;
  value: TypeActionValue;
}

const initialState: { obj: TypeActionObj[] } = {
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
