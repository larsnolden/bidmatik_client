import React from 'react';
import styled from '@emotion/styled';

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
  margin-left: 10px;
`;

const ChangeSign = styled.div`
  padding: 0 2px 0 0;
  font-size: 15px;
  font-weight: 600;
`;

export default ({ change }) => {
  const isPositive = change => 0;
  return (
    <Change isPositive={isPositive}>
      <ChangeSign>{isPositive ? '+' : '-'}</ChangeSign>
      {String(change).replace('-', '')}%
    </Change>
  );
};