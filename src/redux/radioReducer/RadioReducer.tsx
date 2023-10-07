import { TypeActionObj } from "../../services/reducersService";
import { reducerObjActualData } from "../../services/reducersService";
const RADIO = "IRADIO_RADIO";
const CLEAR = "CLEAR_RADIO_ALL";

export interface TypeActionRadio {
  type: typeof RADIO | typeof CLEAR;
  value: TypeActionObj;
}

const initialState: {
  obj: TypeActionObj[];
} = {
  obj: [],
};

const radioReducer = (state = initialState, action: TypeActionRadio) => {
  switch (action.type) {
    case RADIO: {
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

export const radioAction = (value: TypeActionObj) => ({
  type: RADIO,
  value: value,
});

export const clearRadioAction = () => ({
  type: CLEAR,
});

export default radioReducer;