import React from 'react';
import './TooltipOverlay.scss';

export interface TooltipOverlayProps {
  /** ID for the element */
  id?: string;
  /** Tooltip text */
  tooltip: string;
  /** Tooltip font size */
  fontSize: number;
  /** Tooltip text color */
  color?: string;
  /** Tooltip background color */
  backgroundColor?: string;
  /** Tooltip position: top or bottom. By default, will appear on the right. Use offset to adjust*/
  position?: string;
  /** Tooltip horizontal position offset */
  hOffset?: number;
  /** Tooltip vertical position offset */
  vOffset?: number;
  /** Elements to overlay on*/
  children?: React.ReactNode;
}

const TooltipOverlay = (props: TooltipOverlayProps) => {
  const {
    id,
    tooltip,
    fontSize,
    color = '#1f0d39',
    backgroundColor = '#ebeaed',
    position = 'bottom',
    hOffset = 0,
    vOffset = 0
  } = props;

  const vpos = position == 'top' ? { top: `${vOffset}rem` } : { bottom: `${vOffset}rem` };

  const tooltipStyles = {
    color,
    backgroundColor,
    ...vpos,
    right: `${hOffset}rem`,
    fontSize: `${fontSize}rem`
  };

  return (
    <div id={id} className="TooltipOverlay">
      <div className="overlay-target">{props.children}</div>
      <div style={tooltipStyles} className="tooltip">
        {tooltip}
      </div>
    </div>
  );
};

export default TooltipOverlay;
