/* eslint-disable no-confusing-arrow */
import React from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Container = styled.div`
  background: ${props => props.darkBg ? '#F9FBFC' : '#FFF'};
  display: flex;
  flex-direction: row;
  height: 48px;
  align-items: center;
  padding-left: 60px;
  justify-content: flex-start;
  flex-basis: 100%;
  padding: 5px 0 5x 60px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-basis: 20%;
`;

const NameColumn = styled(Column)`
  flex-basis: 35%;
  padding-right: 40px;
`;

const ViewColumn = styled(Column)`
  flex-basis: 5%;
`;

const Value = styled.div`
  font-size: 16px;
  color: #627D98;
`;

const Change = styled.div`
  background: ${props => props.isPositive ? 'rgba(14, 124, 134, 0.15)' : 'rgba(214, 69, 69, 0.2)'};
  color: ${props => props.isPositive ? '#2CB1BC' : '#E66A6A'};
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
  color: #186FAF;
  cursor: pointer;
  padding-right: 33px;
  user-select: none;
`;

const Row = ({
  id,
  name,
  columns,
  striped,
  // childRows,
}) => {
  //  first element is always the row items name
  return (
    <Container
      darkBg={striped}
    >
      <NameColumn>
        <Value>
          {name}
        </Value>
      </NameColumn>
      {columns.map(column => (
        <Column>
          <Value>
            {column.value}
          </Value>
          {column.change && (
            <Change isPositive={column.change >= 0}>
              <ChangeSign>
                {column.change >= 0 ? '+' : '-'}
              </ChangeSign>
              {String(column.change).replace('-', '')}
              %
            </Change>
          )}
        </Column>
      ))}
      <ViewColumn>
        <ViewButton to={`/campaign/${id}`}>
          view
        </ViewButton>
      </ViewColumn>
    </Container>
  );
};

export default Row;

Row.defaultProps = {
  striped: false,
};

Row.propTypes = {
  id: propTypes.string.isRequired,
  columns: propTypes.arrayOf(propTypes.shape({
    value: propTypes.string,
    change: propTypes.string,
  })).isRequired,
  striped: propTypes.bool,
};
