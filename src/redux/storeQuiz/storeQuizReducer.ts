const SETQUIZ = "STORE_QUIZ_EWSGREHD34342FDB_drbgtr$$_RF_1514";
const CLEARQUIZ = "CLEAR_QUIZ_EWSGREHD34342FDB_drbgtr$$_RF_1514";

interface InitialStateType {
  data: Array<Object>;
}

const initialState: InitialStateType = { data: [] };

type ValueType<T> = {
  dataStud: { name: T; surname: T; class: T };
  quizData: {
    obj: Array<{ key: T; value: T }>;
    err: Array<T>;
  };
  timeSave: T;
  errList: Array<T>;
};

interface TypeAction {
  type: typeof SETQUIZ | typeof CLEARQUIZ;
  value: ValueType<string>;
}

const storeQuizReducer = (state = initialState, action: TypeAction) => {
  switch (action.type) {
    case SETQUIZ: {
      return { ...state, data: [...state.data, { ...action.value }] };
    }
    case CLEARQUIZ: {
      return { ...initialState };
    }
    default:
      return state;
  }
};

export const setQuizAction = (value: ValueType<string>) => ({
  type: SETQUIZ,
  value,
});

export const cleartQuizAction = () => ({ type: CLEARQUIZ });

export default storeQuizReducer;
