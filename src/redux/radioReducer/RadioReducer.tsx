const RADIO = "IRADIO_RADIO";
const CLEAR = "CLEAR_RADIO_ALL";

type TypeActionObj = { key: string; value: string };

interface TypeAction {
  type: typeof RADIO | typeof CLEAR;
  value: TypeActionObj;
}

const initialState: {
  obj: TypeActionObj[];
} = {
  obj: [],
};

const radioReducer = (state = initialState, action: TypeAction) => {
  switch (action.type) {
    case RADIO: {
      let obj = [...state.obj, { ...action.value }];

      const res = obj.reduce((o: TypeActionObj[], i: TypeActionObj) => {
        if (!o.find((v: TypeActionObj) => v.key === i.key)) {
          o.push({
            ...i,
            value: i.key === action.value.key ? action.value.value : i.value,
          });
        }
        return o;
      }, []);

      return {
        ...state,
        obj: [...res],
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
