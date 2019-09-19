import React, { useState, Fragment } from 'react';
import styled from '@emotion/styled';
import * as R from 'ramda';
import sortIconPath from 'assets/icons/sort.svg';
import Chevron from 'components/Chevron';
import sortDescChevronIconPath from 'assets/icons/sortDesc.svg';
import sortAscChevronIconPath from 'assets/icons/sortAsc.svg';
import unsortedChevronIconPath from 'assets/icons/unsorted.svg';
import filterIconPath from 'assets/icons/filter.svg';
import { Link } from 'react-router-dom';
import ChangePill from 'components/ChangePill';
//  We can reuse the table compoent, and just replace the row compoent for each table type


const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
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
  padding: 15px 0 15px;
`;

const Td = styled.td``;

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

const CenterTd = styled.td`
  text-align: center;
`;

const FilterIcon = styled.img`
  transform: rotate(${props => (props.faceDown ? '0deg' : '180deg')});
`;

const Tr = styled.tr`
  background: ${props =>
    props.activeBg ? 'rgba(220, 238, 251, 1)' : props.darkBg ? '#F9FBFC' : '#FFF'};
  height: 48px;
  user-select: none; 
`;

const ParentTr = styled(Tr)`
  cursor: pointer;
`;

const ChildTr = styled.tr`
  background: rgba(220, 238, 251, 0.5);
  height: 48px;
`;

const CellContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
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

function TableComponent({ columns, data, handleSortQuery }) {
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
    handleSortQuery({sortBy, sortDesc});
  };

  return (
    <Table>
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
      <tbody>
        {data.map((sample, i) => (
          <Row columns={columns} sample={sample} darkBg={i % 2 > 0} />
        ))}
      </tbody>
    </Table>
  );
}

export default TableComponent;
