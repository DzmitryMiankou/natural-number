const INPUT = "INPUT_INPUT";
const UPDATE = "INPUT_UPDATE";

type TypeActionValue = { text: string; id: number };

interface TypeAction {
  type: typeof INPUT | typeof UPDATE;
  value: TypeActionValue;
}

const initialState: { arr: [] | TypeActionValue[] } = {
  arr: [],
};

const plusPageInputReducer = (state = initialState, action: TypeAction) => {
  switch (action.type) {
    case INPUT: {
      return {
        ...state,
        arr: [...state.arr, action.value],
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

export const inputPlusPageAction = (value: { text: string; id: number }) => ({
  type: INPUT,
  value: value,
});
export const updatePlusPageAction = () => ({
  type: UPDATE,
});
export default plusPageInputReducer;
