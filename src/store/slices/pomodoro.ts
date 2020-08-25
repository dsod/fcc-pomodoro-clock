import { createSlice } from "@reduxjs/toolkit";

type PomodoroState = {
  sessionLength: number;
  breakLength: number;
  timeLeft: number;
  timerIsRunning: boolean;
  breakActive: boolean;
};

const initialSessionLength: PomodoroState["sessionLength"] = 25;

const initialState: PomodoroState = {
  sessionLength: initialSessionLength,
  breakLength: 5,
  timeLeft: initialSessionLength * 60,
  timerIsRunning: false,
  breakActive: false,
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
      if (state.sessionLength < 60) {
        state.sessionLength = state.sessionLength + 1;
      } else console.log("Can't set a timer above 60 minutes");
      if (!state.breakActive) {
        state.timeLeft = state.sessionLength * 60;
      }
    },
    decrementSessionLength(state) {
      if (state.sessionLength > 1) {
        state.sessionLength = state.sessionLength - 1;
      } else console.log("Can't set a timer below 1 minutes");
      if (!state.breakActive) {
        state.timeLeft = state.sessionLength * 60;
      }
    },
    incrementBreakLength(state) {
      if (state.breakLength < 60) {
        state.breakLength = state.breakLength + 1;
      } else console.log("Can't set a break time above 60 minutes");
      if (state.breakActive) {
        state.timeLeft = state.breakLength * 60;
      }
    },
    decrementBreakLength(state) {
      if (state.breakLength > 1) {
        state.breakLength = state.breakLength - 1;
      } else console.log("Can't set a break time below 1 minutes");
      if (state.breakActive) {
        state.timeLeft = state.breakLength * 60;
      }
    },
    toggleTimer(state) {
      state.timerIsRunning = !state.timerIsRunning;
    },
    toggleBreak(state) {
      state.breakActive = !state.breakActive;
      state.breakActive
        ? (state.timeLeft = state.breakLength * 60)
        : (state.timeLeft = state.sessionLength * 60);
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
  toggleTimer,
  toggleBreak,
} = pomodoro.actions;

export default pomodoro;
