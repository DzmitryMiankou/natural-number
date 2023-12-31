import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import mainPageReducer from "./mainPageReducer/mainPageReducer";
import plusPageInputReducer from "./plusReducer/Input";
import radioReducer from "./radioReducer/RadioReducer";
import divisionReducer from "./divisionReducer/DivisionReducer";
import multiplicationReducer from "./multiplicationReducer/MultiplicationReducer";
import storeQuizReducer from "./storeQuiz/storeQuizReducer";

const rootReducers = combineReducers({
  static: mainPageReducer,
  plusPageInputReducer: plusPageInputReducer,
  radio: radioReducer,
  division: divisionReducer,
  multiplication: multiplicationReducer,
  storeQuiz: storeQuizReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  blacklist: [
    "static",
    "plusPageInputReducer",
    "division",
    "multiplication",
    "radio",
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(),
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
