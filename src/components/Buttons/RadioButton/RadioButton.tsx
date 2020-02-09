import React from 'react';
import './RadioButton.scss';

export interface RadioButtonProps {
  /* ID for the element */
  id: string;
  /* Group name to associate radio button with*/
  name: string;
  /* Text for label */
  label: string;
  /* Color for label */
  color?: string;
  /* Font family for label */
  fontFamily?: string;
  /* Font size for label */
  fontSize?: number;
  /* Unactive background color */
  unactiveBgColor?: string;
  /* Active background color */
  activeBgColor?: string;
}

const RadioButton = (props: RadioButtonProps) => {
  const {
    id,
    name,
    label,
    color = '#1f0d39',
    fontFamily = "'Source Code Pro', monospace",
    unactiveBgColor = '#ebeaed',
    activeBgColor = '#1f0d39',
  } = props;

  document.documentElement.style.setProperty('--bgColor', unactiveBgColor);
  document.documentElement.style.setProperty('--activeBgColor', activeBgColor);

  const labelStyles = {
    color,
    fontFamily,
  };

  return (
    <div className="RadioButton" style={labelStyles}>
      <input id={id} type="radio" name={name} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;
