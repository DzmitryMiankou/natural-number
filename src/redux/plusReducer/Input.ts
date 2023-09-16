const INPUT = "INPUT_INPUT";

type TypeActionValue = { text: string; id: number };

interface TypeAction {
  type: typeof INPUT;
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
    default:
      return state;
  }
};

export const inputPlusPageAction = (value: { text: string; id: number }) => ({
  type: INPUT,
  value: value,
});
export default plusPageInputReducer;
