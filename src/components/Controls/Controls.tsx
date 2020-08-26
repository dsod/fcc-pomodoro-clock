import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, usePomodoroDispatch } from "../../store";
import {
  decrementTimer,
  resetTimer,
  toggleTimer,
} from "../../store/slices/pomodoro";
import { ReactComponent as StartPauseButton } from "../../assets/images/start_pause.svg";
import { ReactComponent as ResetButton } from "../../assets/images/reset.svg";

type ControllersProps = {
  stopAudio: (element: HTMLAudioElement) => void;
};

const Controls: React.FC<ControllersProps> = (props) => {
  const dispatch = usePomodoroDispatch();
  const timeLeft = useSelector((state: RootState) => state.timeLeft);
  const timerIsRunning = useSelector(
    (state: RootState) => state.timerIsRunning
  );

  useEffect(() => {
    const timer = setTimeout(() => dispatch(decrementTimer()), 1000);
    if (!timerIsRunning || timeLeft <= 0) {
      clearTimeout(timer);
    }
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerIsRunning, timeLeft]);

  const audioElement = document.getElementById("beep") as HTMLAudioElement;

  return (
    <section className="Controls">
      <button
        id="start_stop"
        type="button"
        onClick={() => dispatch(toggleTimer())}
      >
        <StartPauseButton />
      </button>
      <button
        id="reset"
        type="button"
        onClick={() => {
          dispatch(resetTimer());
          props.stopAudio(audioElement);
        }}
      >
        <ResetButton />
      </button>
    </section>
  );
};

export default Controls;
