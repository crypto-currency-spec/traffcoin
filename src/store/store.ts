import { configureStore } from "@reduxjs/toolkit";
import data from "./data";

const store = configureStore({
  reducer: {
    data,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;