import React from "react";
import Controls from "./Controls/Controls";
import Settings from "./Settings/Settings";
import Timer from "./Timer/Timer";

import {
  decrementBreakLength,
  decrementSessionLength,
  incrementBreakLength,
  incrementSessionLength,
} from "../store/slices/pomodoro";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const Pomodoro = () => {
  const breakLength = useSelector((state: RootState) => state.breakLength);
  const sessionLength = useSelector((state: RootState) => state.sessionLength);

  const playAudio = (element: HTMLAudioElement) => {
    console.log(element);
    element.currentTime = 0;
    element?.play();
  };

  const stopAudio = (element: HTMLAudioElement) => {
    if (element) element.currentTime = 0;
    element?.pause();
  };

  return (
    <main className="Pomodoro">
      <Settings
        incrementAction={incrementBreakLength}
        decementAction={decrementBreakLength}
        settingType="break"
        settingLength={breakLength}
      />
      <Timer playAudio={playAudio}></Timer>
      <Settings
        incrementAction={incrementSessionLength}
        decementAction={decrementSessionLength}
        settingType="session"
        settingLength={sessionLength}
      />
      <div className="flex-row"></div>
      <Controls stopAudio={stopAudio} />
    </main>
  );
};
