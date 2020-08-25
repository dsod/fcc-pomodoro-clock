import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import pomodoro from "./slices/pomodoro";

const store = configureStore({
  reducer: pomodoro.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type PomodoroDispatch = typeof store.dispatch;
export const usePomodoroDispatch = () => useDispatch<PomodoroDispatch>();

export default store;
