import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store";
import { usePomodoroDispatch } from "../../store/index";
import { toggleBreak } from "../../store/slices/pomodoro";

type TimerProps = {
  playAudio: (element: HTMLAudioElement) => void;
};

const Timer: React.FC<TimerProps> = (props) => {
  const dispatch = usePomodoroDispatch();

  const breakActive = useSelector((state: RootState) => state.breakActive);

  const timeLeft = useSelector((state: RootState) => state.timeLeft);
  const timeLeftText = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = Math.floor(timeLeft % 60);
    const minutesText = minutes < 10 ? `0${minutes}` : minutes;
    const secondsText = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesText}:${secondsText}`;
  };

  const audioElement = document.getElementById("beep") as HTMLAudioElement;

  useEffect(() => {
    if (timeLeft === 0) {
      dispatch(toggleBreak());
      props.playAudio(audioElement);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  return (
    <section
      className={`Timer ${breakActive ? "break-active" : ""} 
      ${timeLeft < 60 ? "timer-low" : ""}`}
    >
      <h3 id="timer-label">{breakActive ? "Break" : "Session"}</h3>
      <h1 className="timer-text" id="time-left">
        {timeLeftText()}
      </h1>
      <div className="flex-row"></div>
      <audio src="./audio/alarm.wav" id="beep" />
    </section>
  );
};

export default Timer;
