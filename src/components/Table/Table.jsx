import React, { useState } from 'react';
import styled from '@emotion/styled';
import sortDescChevronIconPath from 'assets/icons/sortDesc.svg';
import sortAscChevronIconPath from 'assets/icons/sortAsc.svg';
import unsortedChevronIconPath from 'assets/icons/unsorted.svg';
import filterIconPath from 'assets/icons/filter.svg';
//  We can reuse the table compoent, and just replace the row component for each table type

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
`;

const Thead = styled.thead``;

const HeadTr = styled.tr`
  border-bottom: 1px solid black;
  user-select: none;
`;

const Th = styled.th`
  box-shadow: 0px 1px 0px 0px #bcccdc;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  background: white;
  z-index: 2;
  cursor: pointer;
`;

const FilterIconTh = styled(Th)`
  width: 60px;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 20px 0 20px;
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

const FilterIcon = styled.img`
  transform: rotate(${props => (props.faceDown ? '0deg' : '180deg')});
`;

const Tbody = styled.tbody`
  height: ${props => (props.isLoading ? '500px' : 'auto')};
  display: ${props => (props.isLoading ? 'block' : '')};
  background: #fff;
`;

const Filter = ({ type, handleFilterSet }) => {
  if (type === Number)
    return (
      <th>
        is
        <select>
          <option value="=">=</option>
          <option value="<">&gt;</option>
          <option value=">">&lt;</option>
        </select>
        <input />
      </th>
    );
  return <div />;
};

const SortButton = ({ active, showDesc }) => {
  if (!active) return <SortChevron src={unsortedChevronIconPath} />;
  if (showDesc) return <SortChevron src={sortDescChevronIconPath} />;
  return <SortChevron src={sortAscChevronIconPath} />;
};

function TableComponent({ columns, handleSortQuery, children, isLoading, ...props }) {
  const [sortBy, setSortBy] = useState(null);
  const [sortDesc, setSortDesc] = useState(true);
  const [filterActive, setFilterActive] = useState(false);

  const handleSort = colKey => {
    if (sortBy === colKey && !sortDesc) {
      setSortBy(null);
      setSortDesc(true);
    } else if (sortBy === colKey) setSortDesc(!sortDesc);
    else {
      setSortBy(colKey);
      setSortDesc(true);
    }
    handleSortQuery({ sortBy, sortDesc });
  };

  return (
    <Table {...props}>
      <Thead>
        <HeadTr>
          <FilterIconTh>
            <FilterIcon
              src={filterIconPath}
              faceDown={!filterActive}
              onClick={() => setFilterActive(!filterActive)}
            />
          </FilterIconTh>
          {columns.map(col => (
            <Th onClick={() => handleSort(col.key)}>
              <HeadingContainer>
                <Heading>{col.head}</Heading>
                {col.sortable && <SortButton active={col.key === sortBy} showDesc={sortDesc} />}
              </HeadingContainer>
            </Th>
          ))}
        </HeadTr>
        {filterActive && (
          <tr>
            <th />
            {columns.map(col => (
              <Filter type={col.type} />
            ))}
          </tr>
        )}
      </Thead>
      <Tbody isLoading={isLoading}>{children}</Tbody>
    </Table>
  );
}

export default TableComponent;
