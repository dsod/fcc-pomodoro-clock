import { configureStore } from "@reduxjs/toolkit";
import pomodoro from "./slices/pomodoro";

const store = configureStore({
  reducer: pomodoro.reducer,
});

export default store;
