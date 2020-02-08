import React from 'react';
import './PlainButton.scss';

export interface PlainButtonProps {
  /** ID for the element */
  id?: string;
  /** Button label*/
  label: string[];
  /** Handler for click event */
  handleClick(): void;
}

const PlainButton = (props: PlainButtonProps) => {
  const { id, label, handleClick } = props;
  return (
    <div className="PlainButton">
      <button id={id} onClick={handleClick}>
        {label}
      </button>
    </div>
  );
};

export default PlainButton;
