import React from 'react';
import './StepProgressBar.scss';

export interface StepProgressBarProps {
  /* ID for the element */
  id?: string;
  /* Progress bar steps */
  steps: string[];
  /* Progress bar color */
  progressBarColor?: string;
  /* background color of progress bar */
  progressBarBgColor?: string;
  /* Step range width */
  rangeWidth?: number;
  /* Last completed step  */
  lastCompletedStep?: number;
  /* Font family for step label */
  fontFamily?: string;
  /* Font color */
  color?: string;
}

const StepProgressBar = (props: StepProgressBarProps) => {
  const {
    id,
    steps,
    progressBarColor = '#e65245',
    progressBarBgColor = '#ebeaed',
    rangeWidth = 8,
    lastCompletedStep = 0,
    fontFamily = "'Nunito', sans-serif",
    color = '#e65245',
  } = props;

  const progressBarSteps = steps.map((stepLabel: string, i: number) => {
    return (
      <li key={`${stepLabel}-${i}`} className={i + 1 <= lastCompletedStep ? 'completed' : null}>
        <span>{stepLabel}</span>
      </li>
    );
  });

  document.documentElement.style.setProperty('--stepProgressBar-rangeWidth', `${rangeWidth}rem`);
  document.documentElement.style.setProperty('--stepProgressBar-bgColor', progressBarBgColor);
  document.documentElement.style.setProperty('--stepProgressBar-color', progressBarColor);
  document.documentElement.style.setProperty('--stepProgressBar-fontColor', color);

  return (
    <div className="StepProgressBar">
      <div id={id} className="step-progress-bar" style={{ fontFamily }}>
        {progressBarSteps}
      </div>
    </div>
  );
};

export default StepProgressBar;
