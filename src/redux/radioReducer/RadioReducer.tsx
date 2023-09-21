const RADIO = "IRADIO_RADIO";

type TypeActionObj = { key: string; value: string };

interface TypeAction {
  type: typeof RADIO;
  value: TypeActionObj;
}

const initialState: {
  arr: [] | TypeActionObj[];
  obj: [] | TypeActionObj[] | any;
} = {
  arr: [],
  obj: [],
};

const radioReducer = (state = initialState, action: TypeAction) => {
  switch (action.type) {
    case RADIO: {
      let fd: any = [];
      const f = state.arr.map(function (element: any) {
        console.log(action.value);
        if (element.key === action.value.key) {
          return { [element.key]: action.value.value };
        } else {
          console.log(action.value);
          fd.push(action.value);
          return { [action.value.key]: action.value.value };
        }
      });
      console.log(fd);
      return {
        ...state,
        arr: [...state.arr, action.value],
        obj: [...state.obj, ...f],
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
