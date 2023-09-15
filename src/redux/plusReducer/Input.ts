const INPUT = "INPUT_INPUT";

type TypeActionValue = { text: string; id: number | undefined };

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
      console.log({ ...state, arr: [...state.arr, action.value] });
      return { ...state, arr: [...state.arr, action.value] };
    }
    default:
      return state;
  }
};

export const inputPlusPageAction = (value: {
  text: string;
  id: number | undefined;
}) => ({
  type: INPUT,
  value: value,
});
export default plusPageInputReducer;
