/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useTable } from 'react-table';
import styled from '@emotion/styled';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

const CellRender = instance => {
  const { cell } = instance;
  console.log('cell', cell);
  const withDelta = Object.is(cell.value);
  if (withDelta)
    return (
      <div>
        {cell.value[0]}
        change:
        {cell.value[1]}
      </div>
    );
  return <span>{cell.value}</span>;
};

function Table({ columns, data }) {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });
  return (
    <Styles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {rows.map(
            row =>
              prepareRow(row) || (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render(CellRender)}</td>;
                  })}
                </tr>
              )
          )}
        </tbody>
      </table>
    </Styles>
  );
}

export default Table;
