import React from 'react';
import './HorizontalProgressBar.scss';

export interface HorizontalProgressBarProps {
  /* ID for the element */
  id?: string;
  /* progress bar color */
  progressBarColor?: string;
  /* background color of progress bar */
  progressBarBgColor?: string;
  /* width of progress bar */
  width?: number;
  /* height of progress bar */
  height?: number;
  /* progress range 0 - 100 */
  progress?: number;
  /* progress label */
  label?: boolean;
  /* max progress */
  max?: number;
  /* font family of progress label */
  fontFamily?: string;
  /* font size of progress label */
  fontSize?: number;
  /* font color of progress label */
  color?: string;
}

const HorizontalProgressBar = (props: HorizontalProgressBarProps) => {
  const {
    id,
    progressBarColor = '#9A26FF',
    progressBarBgColor = '#ebeaed',
    width = 5,
    height = 0.4,
    progress = 39,
    label,
    max = 100,
    fontFamily = "'Nunito', sans-serif",
    fontSize = 0.75,
    color = '#1f0d39',
  } = props;

  const validatedProgress = progress > 100 ? 100 : progress;
  const progressLabel = label ? (
    <label>
      <span style={{ color }}>{Math.ceil((validatedProgress / 100) * max)}</span>
      <span> / {max}</span>
    </label>
  ) : null;

  const progressBarWrapperStyles = { background: progressBarBgColor, width: `${width}rem`, height: `${height}rem` };
  const progressBarStyles = { background: progressBarColor, width: `${validatedProgress}%`, height: `${height}rem` };

  return (
    <div className="HorizontalProgressBar" style={{ fontFamily, fontSize: `${fontSize}rem` }}>
      {progressLabel}
      <div className="horizontal-progress-bar-wrapper" style={progressBarWrapperStyles}>
        <div id={id} className="horizontal-progress-bar" style={progressBarStyles} />
      </div>
    </div>
  );
};

export default HorizontalProgressBar;
