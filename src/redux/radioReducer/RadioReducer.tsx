import { TypeActionObj } from "../../services/reducersService";
import { reducerObjActualData } from "../../services/reducersService";
const RADIO = "IRADIO_RADIO";
const CLEAR = "CLEAR_RADIO_ALL";
const RADIOERRORLIST = "RADIO_ERROR_LIST";

export interface TypeActionRadio {
  type: typeof RADIO | typeof CLEAR | typeof RADIOERRORLIST;
  value: TypeActionObj;
}

const initialState: {
  obj: TypeActionObj[];
  err: any;
} = {
  obj: [],
  err: [],
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
    case RADIOERRORLIST: {
      return { ...state, err: action.value };
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

export const radioActionErrList = (value: Array<any>) => ({
  type: RADIOERRORLIST,
  value: value,
});

export const clearRadioAction = () => ({
  type: CLEAR,
});

export default radioReducer;
