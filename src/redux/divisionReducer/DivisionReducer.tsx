import { reducerObjActualData } from "../../services/reducersService";
import { TypeActionObj } from "../../services/reducersService";
const DIVISION = "DIVISION";
const CLEAR = "CLEAR_DIVISION_ALL";

export interface TypeActionDivision {
  type: typeof DIVISION | typeof CLEAR;
  value: { key: number; value: string };
}

const initialState: {
  obj: TypeActionObj[];
} = {
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
      return { ...initialState };
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
