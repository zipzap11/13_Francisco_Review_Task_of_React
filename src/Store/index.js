import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoSlice from "./todoSlice";

const reducers = combineReducers({
  todo: todoSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
const store = configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware,
});

const persistor = persistStore(store);

export { store, persistor };
