/* eslint-disable no-confusing-arrow */
import React from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Chevron from 'components/Chevron';
import shortenString from 'helper/shortenString';

const Container = styled.div`
  background: ${props => (props.darkBg ? '#F2F7FA' : '#FFF')};
  display: flex;
  flex-direction: row;
  height: 48px;
  align-items: center;
  justify-content: flex-start;
  flex-basis: 100%;
  padding: 5px 0 5x 60px;
  cursor: pointer;
`;

const Column = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-basis: 20%;
`;

const ExpandButtonColumn = styled(Column)`
  flex-basis: 40px;
  padding: 0 20px 0 20px;
`;

const NameColumn = styled(Column)`
  flex-basis: 35%;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ViewColumn = styled(Column)`
  flex-basis: 5%;
  padding-right: 33px;
`;

const Value = styled.div`
  font-size: 16px;
  color: #627d98;
`;

const ValueSmall = styled(Value)`
  font-size: 10px;
`;

const Change = styled.div`
  background: ${props =>
    props.isPositive ? 'rgba(14, 124, 134, 0.15)' : 'rgba(214, 69, 69, 0.2)'};
  color: ${props => (props.isPositive ? '#2CB1BC' : '#E66A6A')};
  font-weight: 500;
  font-size: 13px;
  margin-left: 4px;
  display: flex;
  flex-directionL row;
  align-items: center;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 2px 7px;
`;

const ChangeSign = styled.div`
  padding: 0 2px 0 0;
  font-size: 15px;
  font-weight: 600;
`;

const ViewButton = styled(Link)`
  font-size: 14px;
  color: #186faf;
  cursor: pointer;
  user-select: none;
`;

const ChevronRotateAble = styled(Chevron)`
  transform: ${props => (props.rotate ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const Row = ({
  name,
  type,
  columns,
  striped,
  onViewClickPath,
  isExpanded,
  handleExpandClick
  // childRows,
}) => (
  //  first element is always the row items name
  <Container darkBg={striped} onClick={handleExpandClick}>
    <ExpandButtonColumn>
      {handleExpandClick && (
        <ChevronRotateAble rotate={isExpanded} color="#aaa" width={12} height={12} />
      )}
    </ExpandButtonColumn>
    <NameColumn>
      <ValueSmall>{type}</ValueSmall>
      <Value>{shortenString(name, 24)}</Value>
    </NameColumn>
    {columns.map(column => (
      <Column>
        <Value>{column.value}</Value>
        {column.change && (
          <Change isPositive={column.change >= 0}>
            <ChangeSign>{column.change >= 0 ? '+' : '-'}</ChangeSign>
            {String(column.change).replace('-', '')}%
          </Change>
        )}
      </Column>
    ))}
    <ViewColumn>{onViewClickPath && <ViewButton to={onViewClickPath}>view</ViewButton>}</ViewColumn>
  </Container>
);

export default Row;

Row.defaultProps = {
  striped: false
};

Row.propTypes = {
  columns: propTypes.arrayOf(
    propTypes.shape({
      value: propTypes.string,
      change: propTypes.string
    })
  ).isRequired,
  striped: propTypes.bool
};
