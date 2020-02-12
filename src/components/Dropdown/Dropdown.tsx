import React, { useState, useEffect } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import './Dropdown.scss';

export interface DropdownProps {
  /* ID for the element */
  id?: string;
  /* List of options for Dropdown */
  options: string[];
  /* Default option */
  dft?: string;
  /* Handler for when an option is select */
  handleSelect(): void;
  /* Focus color style */
  focusColor?: string;
  /* Drop down option hover color */
  hoverColor?: string;
}

const FOCUS_STYLE = 'selector focus';
const UNFOCUS_STYLE = 'selector';

const Dropdown = (props: DropdownProps) => {
  const { id, options, dft = '-', handleSelect, focusColor = '#1f0d39', hoverColor = '#ebeaed' } = props;

  document.documentElement.style.setProperty('--dropdown-focus', focusColor);
  document.documentElement.style.setProperty('--dropdown-hover', hoverColor);

  const [focus, setFocus] = useState(false);
  const [ctx, setContext] = useState();
  const [expand, setExpand] = useState(false);
  const [style, setStyle] = useState(UNFOCUS_STYLE);

  useEffect(() => {
    setContext(document.getElementById(`${id}-dropdown`));
  }, []);

  const toggleFocus = () => {
    if (focus) {
      setExpand(false);
      setStyle(UNFOCUS_STYLE);
    } else {
      setExpand(true);
      setStyle(FOCUS_STYLE);
    }
    setFocus(!focus);
  };

  const selectHandler = (e: React.MouseEvent<HTMLElement>) => {
    // @ts-ignore
    ctx.innerHTML = e.target.id;
    handleSelect();
    toggleFocus();
  };

  const opts = options.map((opt: string) => {
    return (
      <li key={opt} id={opt} onClick={selectHandler}>
        {opt}
      </li>
    );
  });

  return (
    <div className="dropdown">
      <div id={`${id}-dropdown`} className={style} onClick={toggleFocus}>
        {dft}
      </div>
      {expand ? <FiChevronUp className="caret" /> : <FiChevronDown className="caret" />}
      {expand ? <ul>{opts}</ul> : null}
    </div>
  );
};

export default Dropdown;
