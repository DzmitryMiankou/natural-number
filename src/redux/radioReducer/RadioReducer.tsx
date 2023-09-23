const RADIO = "IRADIO_RADIO";

type TypeActionObj = { key: string; value: string };

interface TypeAction {
  type: typeof RADIO;
  value: TypeActionObj;
}

const initialState: {
  arr: TypeActionObj[];
  obj: TypeActionObj[];
} = {
  arr: [],
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
        arr: [...state.arr, action.value],
        obj: [...res],
      };
    }
    default:
      return state;
  }
};

export const radioAction = (value: TypeActionObj) => ({
  type: RADIO,
  value: value,
});

export default radioReducer;
