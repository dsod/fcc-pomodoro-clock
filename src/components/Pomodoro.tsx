import React from "react";
import Controllers from "./Controllers/Controllers";
import Settings from "./Settings/Settings";
import Timer from "./Timer/Timer";

export const Pomodoro = () => {
  return (
    <main>
      <Settings />
      <Timer />
      <Controllers />
    </main>
  );
};
