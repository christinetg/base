import React from 'react';
import './Row.scss';

export interface RowProps {
  /** ID for the element */
  id?: string;
  /** Data for row */
  rowData: Object;
  /** Column widths */
  columnWidths: number[];
  //** Row style */
  cellStyles?: Object;
}

const isJSON = (el: any) => {
  try {
    JSON.parse(el);
    return true;
  } catch (err) {
    return false;
  }
};

const Row = (props: RowProps) => {
  const { id, rowData, columnWidths, cellStyles = {} } = props;
  // @ts-ignore
  const rowValues = Object.values(rowData);

  const row = rowValues.map((cellValue: any, i: number) => {
    const td = !isJSON(cellValue) ? (
      // @ts-ignore
      <td width={`${columnWidths[i]}`} style={{ textAlign: 'left', ...cellStyles }}>
        <pre>{JSON.stringify(cellValue, null, 4)}</pre>
      </td>
    ) : (
      //@ts-ignore
      <td width={`${columnWidths[i]}`} style={cellStyles}>
        {cellValue}
      </td>
    );
    return td;
  });

  return (
    <tr id={id} className="Row">
      {row}
    </tr>
  );
};

export default Row;
