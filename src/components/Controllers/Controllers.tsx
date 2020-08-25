import React from "react";
import { usePomodoroDispatch } from "../../store";
import { resetTimer } from "../../store/slices/pomodoro";

const Controllers = () => {
  const dispatch = usePomodoroDispatch();
  return (
    <div>
      <button type="button">Play / Pause</button>
      <button type="button" onClick={() => dispatch(resetTimer())}>
        Reset
      </button>
    </div>
  );
};

export default Controllers;
