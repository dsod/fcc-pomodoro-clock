import { createSlice } from "@reduxjs/toolkit";

type PomodoroState = {
  sessionLength: number;
  breakLength: number;
  timeLeft: number;
};

const initialState: PomodoroState = {
  sessionLength: 25,
  breakLength: 5,
  timeLeft: 25,
};

const pomodoro = createSlice({
  name: "pomodoro",
  initialState,
  reducers: {
    decrementTimer(state) {
      state.timeLeft = state.timeLeft - 1;
    },
    resetTimer: (state) => initialState,
    incrementSessionLength(state) {
      state.sessionLength = state.sessionLength + 1;
    },
    decrementSessionLength(state) {
      state.sessionLength = state.sessionLength - 1;
    },
    incrementBreakLength(state) {
      state.breakLength = state.breakLength + 1;
    },
    decrementBreakLength(state) {
      state.breakLength = state.breakLength - 1;
    },
  },
});

export const {
  decrementTimer,
  resetTimer,
  incrementSessionLength,
  decrementBreakLength,
  incrementBreakLength,
  decrementSessionLength,
} = pomodoro.actions;

export default pomodoro;
