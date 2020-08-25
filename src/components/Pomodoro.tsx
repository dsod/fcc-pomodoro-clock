import React from "react";
import Controllers from "./Controllers/Controllers";
import Settings from "./Settings/Settings";
import Timer from "./Timer/Timer";

export const Pomodoro = () => {
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
    <main>
      <Settings />
      <Timer playAudio={playAudio}></Timer>
      <Controllers stopAudio={stopAudio} />
    </main>
  );
};
