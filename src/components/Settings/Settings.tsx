import React from "react";
import { useSelector } from "react-redux";
import { RootState, usePomodoroDispatch } from "../../store";
import {
  decrementBreakLength,
  decrementSessionLength,
  incrementBreakLength,
  incrementSessionLength,
} from "../../store/slices/pomodoro";

const Settings = () => {
  const breakLength = useSelector((state: RootState) => state.breakLength);
  const sessionLength = useSelector((state: RootState) => state.sessionLength);
  const dispatch = usePomodoroDispatch();

  return (
    <section className="Settings">
      <div className="Setting">
        <h1 id="break-label">Break Length</h1>
        <button
          id="break-decrement"
          type="button"
          onClick={() => dispatch(decrementBreakLength())}
        >
          Decrement
        </button>
        <div id="break-length">{breakLength}</div>
        <button
          id="break-increment"
          type="button"
          onClick={() => dispatch(incrementBreakLength())}
        >
          Increment
        </button>
      </div>
      <div className="setting">
        <h1 id="session-label">Session Length</h1>
        <button
          id="session-decrement"
          type="button"
          onClick={() => dispatch(decrementSessionLength())}
        >
          Decrement
        </button>
        <div id="session-length">{sessionLength}</div>
        <button
          id="session-increment"
          type="button"
          onClick={() => dispatch(incrementSessionLength())}
        >
          Increment
        </button>
      </div>
    </section>
  );
};

export default Settings;
