import React, { useState, Fragment } from 'react';
import styled from '@emotion/styled';
import * as R from 'ramda';
import sortIconPath from 'assets/icons/sort.svg';

const Table = styled.table`
  border: 1px solid #aaa;
  width: 100%;
`;

const Thead = styled.thead`
  th {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    background: white;
    z-index: 2;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 10px;
`;

const Td = styled.td`
  width: ${props => props.width};
`;

const Heading = styled.div`
  font-weight: 500;
  font-size: 17px;
  line-height: 13px;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  color: #627d98;
`;

const SortChevron = styled.img`
  width: 8px;
  height: 10px;
  margin-left: 2px;
`;

const SortButton = () => {
  const [sortState, setSortState] = useState(null);
};

const Row = ({ columns, sample, isChild = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [sortyBy, setSortBy] = useState(false);
  const [sortDirection, setSortDirection] = useState('desc');
  const toggleIsExpanded = () => setIsExpanded(!isExpanded);

  const ParentRow = () => (
    <tr>
      {columns.map(col => (
        <Td width={col.width || 'auto'}>
          {col.render || col.childRender ? (
            !isChild ? (
              <col.render {...sample} toggleIsExpanded={toggleIsExpanded} isExpanded={isExpanded} />
            ) : (
              <col.childRender
                {...sample}
                toggleIsExpanded={toggleIsExpanded}
                isExpanded={isExpanded}
              />
            )
          ) : (
            sample[col.key]
          )}
        </Td>
      ))}
    </tr>
  );

  if (!isExpanded) return <ParentRow />;

  return (
    <Fragment>
      <ParentRow />
      {sample.children.map(childSample => (
        <Row columns={columns} sample={childSample} isChild />
      ))}
    </Fragment>
  );
};

function TableComponent({ columns, data }) {
  return (
    <Table>
      <Thead>
        <tr>
          <th>Filter</th>
          {columns.map(col =>
            col.head ? (
              <th onClick={col.onSortClick}>
                <HeadingContainer>
                  <Heading>{col.head}</Heading>
                  {col.sortable && <SortChevron src={sortIconPath} />}
                </HeadingContainer>
              </th>
            ) : null
          )}
        </tr>
      </Thead>
      <tbody>
        {data.map(sample => (
          <Row columns={columns} sample={sample} />
        ))}
      </tbody>
    </Table>
  );
}

export default TableComponent;
