import React from 'react';
import styled from '@emotion/styled';
import * as R from 'ramda';

const Table = styled.table`
  border: 1px solid #aaa;
  width: 100%;
`;

const Td = styled.td`
  width: ${props => props.width};
`;

function TableComponent({ columns, data }) {
  // const keys = columns.map(column => column.key);
  const heads = columns.map(column => column.head);

  return (
    <Table>
      <thead>
        <tr>
          {heads.map(head => (
            <th>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(sample => (
          <tr>
            {columns.map(col => (
              <Td width={col.width || 'auto'}>
                {col.render ? <col.render {...sample} /> : sample[col.key]}
              </Td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableComponent;
