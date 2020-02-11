import React from 'react';
import './StepProgressBar.scss';

export interface StepProgressBarProps {
  /** ID for the element */
  id?: string;
}

const StepProgressBar = (props: StepProgressBarProps) => {
  return (
    <div className="StepProgressBar">
      {/* <ul className="step-progress-bar"> */}
      <div className="step-progress-bar">
        <li className="active">
          <span>Step 1</span>
        </li>
        <li className="active">
          <span>Step 2</span>
        </li>
        <li className="active">
          <span>Step 3</span>
        </li>
        <li>
          <span>Step 4</span>
        </li>
      </div>
      {/* </ul> */}
    </div>
  );
};

export default StepProgressBar;
