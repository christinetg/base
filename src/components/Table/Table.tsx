import React from 'react';
import Row from './Row/Row';
import './Table.scss';

export interface TableProps {
  /** ID for the element */
  id?: string;
  /** Table header values */
  columnHeadings: string[];
  /** Array of json objects to represent values for each row */
  data: Object[];
  /** Widths of each column. Measurement unit in terms of rem */
  columnWidths: number[];
  /** Font color */
  fontColor?: string;
  /** Font family */
  fontFamily?: string;
  /** Font size */
  fontSize?: number;
  /** Header font size */
  headerFontSize?: number;
  /** Row padding left */
  cellPaddingLeft?: number;
  /** Row padding right */
  cellPaddingRight?: number;
  /** Row padding top */
  cellPaddingTop?: number;
  /** Row padding bottom */
  cellPaddingBottom?: number;
}

const Table = (props: TableProps) => {
  const {
    id,
    columnHeadings,
    data,
    columnWidths,
    fontColor = '#1f0d39',
    fontFamily = "'Source Code Pro', monospace",
    fontSize = 0.8,
    headerFontSize = 0.8,
    cellPaddingLeft = 0,
    cellPaddingRight = 0,
    cellPaddingTop = 0,
    cellPaddingBottom = 0
  } = props;

  const tableStyles = {
    fontColor,
    fontFamily,
    fontSize: `${fontSize}rem`
  };

  const cellStyles = {
    padding: `${cellPaddingTop}rem ${cellPaddingRight}rem ${cellPaddingBottom}rem ${cellPaddingLeft}rem`
  };

  const tableHeader = columnHeadings.map((heading: string, i: number) => {
    return (
      // @ts-ignore
      <th key={heading} width={`${columnWidths[i]}`} style={cellStyles}>
        <h1 style={{ fontSize: `${headerFontSize}rem` }}>{heading}</h1>
      </th>
    );
  });

  const tableRows = data.map((rowData: Object, i: number) => {
    return <Row id={`${i}`} rowData={rowData} columnWidths={columnWidths} cellStyles={cellStyles} />;
  });

  return (
    <div id={id} className="Table">
      <table style={tableStyles}>
        <thead>{tableHeader}</thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};

export default Table;
