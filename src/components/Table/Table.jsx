import React from 'react';
import styled from '@emotion/styled';
import * as R from 'ramda';

const Styles = styled.div`
  border: 0.5px solid gray;
`

function Table({ columns, data }) {
  return (
    <Styles>
      <table>
        <thead>
          <tr>
            {columns.map(
              column => <th>{column.head}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {
            data.map(
              sample => (
                <tr>{columns.map(column => column.render(R.pick(column.keys, sample)))}</tr>
              )
            )
          }
        </tbody>
      </table>
    </Styles>
  )
};

export default Table