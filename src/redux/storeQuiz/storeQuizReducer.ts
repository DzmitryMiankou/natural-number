const SETQUIZ = "STORE_QUIZ_EWSGREHD34342FDB_drbgtr$$_RF_1514";

interface InitialStateType {
  data: Array<Object>;
}

const initialState: InitialStateType = { data: [] };

interface TypeAction<T> {
  type: T;
}

type Action = TypeAction<typeof SETQUIZ>;

const storeQuizReducer = (state = initialState, action: Action | any) => {
  switch (action.type) {
    case SETQUIZ: {
      return { ...state, data: [...state.data, { ...action.value }] };
    }
    default:
      return state;
  }
};

export const setQuizAction = (value: any) => ({ type: SETQUIZ, value });
export default storeQuizReducer;
