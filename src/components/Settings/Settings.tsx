import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";

import { ReactComponent as ArrowDown } from "../../assets/images/arrow-down.svg";
import { ReactComponent as ArrowUp } from "../../assets/images/arrow-up.svg";
import { RootState, usePomodoroDispatch } from "../../store";

type SettingsProps = {
  incrementAction: ActionCreatorWithoutPayload;
  decementAction: ActionCreatorWithoutPayload;
  settingType: string;
  settingLength: RootState["breakLength"] | RootState["sessionLength"];
};

const Settings: React.FC<SettingsProps> = (props) => {
  const timerRunning = useSelector((state: RootState) => state.timerIsRunning);
  const dispatch = usePomodoroDispatch();

  const handleClickEvents = (action: ActionCreatorWithoutPayload) => {
    if (!timerRunning) {
      dispatch(action());
    }
  };

  const capitalizedSetting =
    props.settingType.charAt(0).toUpperCase() + props.settingType.slice(1);

  return (
    <section
      className={`${capitalizedSetting} ${
        timerRunning ? "setting-inactive" : ""
      }`}
    >
      <h4 id={`${props.settingType}-label`}>{capitalizedSetting}</h4>
      <button
        id={`${props.settingType}-increment`}
        type="button"
        onClick={() => handleClickEvents(props.incrementAction)}
      >
        <ArrowUp />
      </button>
      <h2 id={`${props.settingType}-length`}>{props.settingLength}</h2>
      <button
        id={`${props.settingType}-decrement`}
        type="button"
        onClick={() => handleClickEvents(props.decementAction)}
      >
        <ArrowDown />
      </button>
    </section>
  );
};

export default Settings;
