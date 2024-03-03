import { ProgressBarComponent } from "@syncfusion/ej2-react-progressbar";
import React from "react";

function ProgressBar() {
  return (
    <ProgressBarComponent
      id="linear"
      type="Linear"
      height="60"
      value={40}
      animation={{
        enable: true,
        duration: 2000,
        delay: 0,
      }}
    ></ProgressBarComponent>
  );
}
export default ProgressBar;
