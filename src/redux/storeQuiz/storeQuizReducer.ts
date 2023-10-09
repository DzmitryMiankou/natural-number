const SETQUIZ = "STORE_QUIZ_EWSGREHD34342FDB_drbgtr$$_RF_1514";

const initialState: [] = [];

interface TypeAction<T> {
  type: T;
}

type Action = TypeAction<typeof SETQUIZ>;

const storeQuizReducer = (state = initialState, action: Action | any) => {
  switch (action.type) {
    case SETQUIZ: {
      return { ...state, ...action.value };
    }
    default:
      return state;
  }
};

export const setQuizAction = (value: any) => ({ type: SETQUIZ, value });
export default storeQuizReducer;
