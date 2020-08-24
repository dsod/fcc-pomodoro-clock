import { createSlice } from "@reduxjs/toolkit";

const pomodoro = createSlice({
  name: "pomodoro",
  initialState: {
    timerLength: 1500,
    currentTimer: 1500,
  },
  reducers: {
    decrementTimer: (state) => state.currentTimer--,
    resetTimer: (state) => (state.currentTimer = state.timerLength),
  },
});

export default pomodoro;
