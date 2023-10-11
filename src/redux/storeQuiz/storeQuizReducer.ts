const SETQUIZ = "STORE_QUIZ_EWSGREHD34342FDB_drbgtr$$_RF_1514";
const CLEARQUIZ = "CLEAR_QUIZ_EWSGREHD34342FDB_drbgtr$$_RF_1514";

interface InitialStateType {
  data: Array<Object>;
}

const initialState: InitialStateType = { data: [] };

interface TypeAction<T> {
  type: T;
}

type Action = TypeAction<typeof SETQUIZ | typeof CLEARQUIZ>;

const storeQuizReducer = (state = initialState, action: Action | any) => {
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

export const setQuizAction = (value: {
  dataStud: { name: string; surname: string; class: string };
  quizData: any;
  timeSave: string;
  errList: Array<string>;
}) => ({ type: SETQUIZ, value });

export const cleartQuizAction = () => ({ type: CLEARQUIZ });

export default storeQuizReducer;
